import React, { useEffect, useState, useReducer, createContext } from "react";
import reviewsReducer from "./reviewsReducer";

const ReviewsCntxt = createContext({
  title: "",
  image: "",
  addMovie: () => {},
  remove: () => {},
  edit: () => {},
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

  const addMovie = (newItem) => {
    const items = [...reviewsState.reviews];
    const isInReviews = items.find((item) => item.id === newItem.id);
    if (isInReviews) return;
    const addedItems = [newItem, ...items];
    dispatchReviewsState({
      type: "MODIFY_REVIEWS",
      payload: { ...reviewsState, reviews: [...addedItems] },
    });
  };

  const removeMovie = (itemId) => {
    const items = [...reviewsState.reviews];
    const updatedItems = items.filter((item) => item.id !== itemId);
    dispatchReviewsState({
      type: "MODIFY_REVIEWS",
      payload: { ...reviewsState, reviews: [...updatedItems] },
    });
  };

  const updateMovie = (itemId, likes, hates) => {
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
  return (
    <ReviewsCntxt.Provider value={value}>
      {props.children}
    </ReviewsCntxt.Provider>
  );
};

export { ReviewsCtxtProvider, ReviewsCntxt };
