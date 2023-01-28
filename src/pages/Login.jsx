import React, { useEffect, useContext } from "react";
import classes from "./Login.module.css";
import SignInForm from "../components/auth/SIgnInForm";
import SIgnUpForm from "../components/auth/SIgnUpForm";
import { useNavigate } from "react-router";
import { UserContext } from "../store/authContext";

// import { useNavigate } from "react-router-dom";
const Authentication = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    if (currentUser) {
      navigate("/upcoming");
    }
  });

  return (
    <div className={classes.authentication_container}>
      <SignInForm />
      <SIgnUpForm />
    </div>
  );
};

export default Authentication;
