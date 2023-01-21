import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState, useReducer, createContext } from "react";

const REVIEW_ACTION_TYPES = {
  ADD_REVIEW: "ADD_REVIEW",
  REMOVE_REVIEW: "REMOVE_REVIEW",
  EDIT_REVIEW: "EDIT_REVIEW",
};

const INITIAL_STATE = {
  title: "",
  image: "",
  loves: "",
  hates: "",
  id: "",
};

const reviewReducer = (state, action) => {
  console.log("dispathec sth new", action, state);
  switch (action.type) {
    case REVIEW_ACTION_TYPES.ADD_REVIEW:
      // const existingReview = state.id === action.id;
      // if (existingReview) {
      //   return { ...state };
      // } else {
      return { ...state, ...action.payload };
    // }
    case REVIEW_ACTION_TYPES.EDIT_REVIEW:
      return { ...state, ...action.payload };
    case REVIEW_ACTION_TYPES.REMOVE_REVIEW:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

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

const ReviewsCtxtProvider = (props) => {
  const [reviewsState, dispatchReviewsState] = useReducer(
    reviewReducer,
    INITIAL_STATE
  );

  const addMovie = (item) => {
    dispatchReviewsState({
      type: REVIEW_ACTION_TYPES.ADD_REVIEW,
      ...item,
    });
  };
  const value = {
    title: "",
    image: "",
    addMovie: addMovie,
    remove: () => {},
    edit: () => {},
    loves: "",
    hates: "",
    id: "",
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
