import React, { useEffect, useState, createContext, useReducer } from "react";
import authReducer from "./authReducer";

export const UserCntxt = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const INITIAL_STATE = {
  currentUser: null,
};

export const UserCtxtProvider = (props) => {
  const [currentUser, dispatchUser] = useReducer(authReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatchUser({
      type: "SET_CUR_USER",
      payload: user,
    });
  };

  const value = {
    currentUser,
    setCurrentUser,
  };

  return (
    <UserCntxt.Provider value={value}>{props.children}</UserCntxt.Provider>
  );
};
