import React, { useEffect } from "react";
import classes from "./Login.module.css";
import SignInForm from "../components/auth/SIgnInForm";
import SIgnUpForm from "../components/auth/SIgnUpForm";
import { useNavigate } from "react-router-dom";
const Authentication = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/shop");
  //   }
  // });

  return (
    <div className={classes.authentication_container}>
      <SignInForm />
      <SIgnUpForm />
    </div>
  );
};

export default Authentication;
