import React, {
  useEffect,
  useState,
  useReducer,
  createContext,
  useContext,
} from "react";
import reviewsReducer from "./reviewsReducer";
import { UserContext } from "./authContext";
import {
  getUserReviesFromFireStore,
  addReviewsToFirestore,
  updateReviewsToFireStore,
  removeReviewFromFirestore,
} from "../utils/firebase/firebase";
import { async } from "q";
const ReviewsCntxt = createContext({
  title: "",
  image: "",
  addMovie: () => {},
  remove: () => {},
  edit: () => {},
  fetchFirestoreMovies: () => {},
  loves: "",
  hates: "",
  id: "",
});

const INITIAL_STATE = {
  reviews: [],
};

const ReviewsCtxtProvider = (props) => {
  const [reviewsState, dispatchReviewsState] = useReducer(
    reviewsReducer,
    INITIAL_STATE
  );
  const fetchFirestoreMovies = async (reviewsArray) => {
    return await dispatchReviewsState({
      type: "MODIFY_REVIEWS",
      payload: { ...reviewsState, reviews: [...reviewsArray] },
    });
  };
  const { currentUser } = useContext(UserContext);

  const clearDashboard = async () => {
    return await dispatchReviewsState({
      type: "MODIFY_REVIEWS",
      payload: { reviews: [] },
    });
  };

  const addMovie = (newItem, uid) => {
    if (!currentUser) return;
    const items = [...reviewsState.reviews];
    const isInReviews = items.find((item) => item.id === newItem.id);
    if (isInReviews) return;

    const addedItems = [newItem, ...items];

    dispatchReviewsState({
      type: "MODIFY_REVIEWS",
      payload: { ...reviewsState, reviews: [...addedItems] },
    });

    addReviewsToFirestore(newItem, currentUser.uid);
  };

  const removeMovie = (itemId) => {
    if (!currentUser) return;
    const items = [...reviewsState.reviews];
    const updatedItems = items.filter((item) => item.id !== itemId);

    dispatchReviewsState({
      type: "MODIFY_REVIEWS",
      payload: { ...reviewsState, reviews: [...updatedItems] },
    });
    removeReviewFromFirestore(itemId, currentUser.uid);
  };

  const updateMovie = (itemId, likes, hates) => {
    if (!currentUser) return;
    const items = [...reviewsState.reviews];
    const isInReviews = items.find((item) => item.id === itemId);
    if (isInReviews) {
      const updatedItems = items.map((movie) =>
        movie.id === itemId ? { ...movie, likes: likes, hates: hates } : movie
      );
      dispatchReviewsState({
        type: "MODIFY_REVIEWS",
        payload: { ...reviewsState, reviews: [...updatedItems] },
      });
      updateReviewsToFireStore(itemId, currentUser.uid, likes, hates);
    }
  };

  const value = {
    addMovie: addMovie,
    removeMovie: removeMovie,
    editMovie: updateMovie,
    reviewsState,
  };

  React.useEffect(() => {
    console.log("pinned state", reviewsState);
  }, [reviewsState]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        if (!currentUser) {
          clearDashboard();
        }
        if (currentUser) {
          const reviews = await getUserReviesFromFireStore(currentUser.uid);
          console.log("reviews fetched succesfully", reviews);
          fetchFirestoreMovies(reviews);
        }
      } catch (err) {
        console.log("Couldn't fetch user data from firestore", err);
      }
    }
    fetchData();
  }, [currentUser]);
  return (
    <ReviewsCntxt.Provider value={value}>
      {props.children}
    </ReviewsCntxt.Provider>
  );
};

export { ReviewsCtxtProvider, ReviewsCntxt };
