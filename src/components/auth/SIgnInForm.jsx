import React, { useState } from "react";
import classes from "./SIgnForm.module.css";
const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [fields, setFormFields] = useState(defaultFormValues);
  const [accError, setAccErr] = useState("");

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...fields, [name]: value });
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await signInAuthWithEmailAndPassword(email, password);
  //       resetFormFields();
  //     } catch (err) {
  //       if (err.code === "auth/wrong-password") {
  //         setAccErr("incorrect password for email");
  //         console.error("login error", err);
  //       }
  //       if (err.code === "auth/user-not-found") {
  //         setAccErr("Please register before loginig in");
  //       } else {
  //         console.error("login error", err);
  //         setAccErr(err);
  //       }
  //     }
  //   };
  return (
    <div>
      <div className={classes.sign_up_container}>
        <h2>Already have an account</h2>
        {accError && <p>{accError}</p>}
        <form onSubmit={console.log("add")}>
          <input
            label='Email'
            required
            type='email'
            onChange={handleChange}
            name='email'
            placeholder='Enter your email'
          />
          <input
            label='Password'
            required
            type='password'
            onChange={handleChange}
            name='password'
            placeholder='Enter your password'
          />
          <div className={classes.buttons_container}>
            <button type='submit' className='button'>
              Sign in
            </button>
            <button
              type='button'
              onClick={console.log("dat")}
              className='button google_btn'
            >
              Google sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
