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
  switch (action.type) {
    case REVIEW_ACTION_TYPES.ADD_REVIEW:
      return { ...state, ...action.payload };

    case REVIEW_ACTION_TYPES.REMOVE_REVIEW:
      return { ...state, ...action.payload };

    case REVIEW_ACTION_TYPES.EDIT_REVIEW:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};

const ReviewsCntxt = createContext({
  title: "",
  image: "",
  add: () => {},
  remove: () => {},
  edit: () => {},
  loves: "",
  hates: "",
  id: "",
});

const ReviewsCtxtProvider = (props) => {
  const value = {
    title: "",
    image: "",
    add: () => {},
    remove: () => {},
    edit: () => {},
    loves: "",
    hates: "",
    id: "",
  };

  const [reviewsState, dispatchReviewsState] = useReducer(
    reviewReducer,
    INITIAL_STATE
  );

  return (
    <ReviewsCntxt.Provider value={value}>
      {props.children}
    </ReviewsCntxt.Provider>
  );
};
