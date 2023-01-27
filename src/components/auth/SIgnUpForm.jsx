import { useState } from "react";

import classes from "./SIgnForm.module.css";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (password !== confirmPassword) {
    //   alert("passwords do not match");
    //   return;
    // }

    // try {
    //   const { user } = await createAuthUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserDocumentFromAuth(user, { displayName });
    //   resetFormFields();
    // } catch (error) {
    //   if (error.code === "auth/email-already-in-use") {
    //     alert("Cannot create user, email already in use");
    //   } else {
    //     console.log("user creation encountered an error", error);
    //   }
    // }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={classes.sign_up_container}>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
          placeholder='Enter your name'
        />

        <input
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
          placeholder='Enter your email'
        />

        <input
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
          placeholder='Enter your password'
        />

        <input
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          placeholder='Confirm your password'
        />
        <button type='submit' className='button'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

// import { useState, useContext } from "react";
// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

// import { UserContext } from "../../contexts/user.context";
// import FormInput from "../forminput/forminput.component";
// import "./signupform.component.scss";
// import Button from "../button/button.component";

// const defaultFormValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// const SignUpForm = () => {
//   const [fields, setFields] = useState(defaultFormValues);
//   const { displayName, email, password, confirmPassword } = fields;
//   const { setCurrentUser } = useContext(UserContext);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFields({ ...fields, [name]: value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("password doesn't match");
//       return;
//     }
//     try {
//       const { user } = createAuthUserWithEmailAndPassword(email, password);
//       setCurrentUser(user);
//       await createUserDocumentFromAuth(user, { displayName });
//       setFields(defaultFormValues);
//     } catch (err) {
//       if ((err.code = "auth/email-already-in-use")) {
//         alert("Email already in use");
//       }
//       console.error("user creation error", err);
//     }
//   };
//   return (
//     <div className='sign-up-container'>
//       <span>Use your email to sign up</span>
//       <form onSubmit={handleSubmit}>
//         <FormInput
//           label='Name'
//           required
//           type='text'
//           onChange={handleChange}
//           name='name'
//           value={displayName}
//         />
//         <FormInput
//           label='Email'
//           required
//           type='email'
//           onChange={handleChange}
//           name='email'
//           value={email}
//         />
//         <FormInput
//           label='Password'
//           required
//           type='password'
//           onChange={handleChange}
//           name='password'
//           value={password}
//         />
//         <FormInput
//           label='Type your password again'
//           required
//           type='password'
//           onChange={handleChange}
//           name='confirmPassword'
//           value={confirmPassword}
//         />

//         <Button type='submit'>Submit</Button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;
