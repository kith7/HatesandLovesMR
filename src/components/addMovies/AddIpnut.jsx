import React, { useState, useContext } from "react";
import { ReviewsCntxt } from "../../store/ReviewsContext";
import { UserContext } from "../../store/authContext";
import classes from "./addinput.module.css";

const AddIpnut = ({ details }) => {
  const [likes, setLikes] = useState("");
  const [hates, setHates] = useState("");
  const plsLogin = (
    <h3 className={classes.loginmessage}>
      Login or create an account to add and manage reviews.
    </h3>
  );
  const ctxt = useContext(ReviewsCntxt);
  const { currentUser } = useContext(UserContext);

  const disableButton = ctxt.reviewsState.reviews.find(
    (movie) => movie.id === details.id
  );

  const handleAdd = (e) => {
    e.preventDefault();
    if (!currentUser) return;
    const newItem = {
      likes,
      hates,
      title: details.title,
      image: details.image,
      id: details.id,
    };

    ctxt.addMovie(newItem);
    console.log(ctxt);
  };
  return (
    <div>
      <p>Movie loves&hates</p>
      {!currentUser && plsLogin}
      <form onSubmit={(e) => handleAdd(e)}>
        <textarea
          rows={2}
          cols={30}
          className='form-input'
          maxLength={160}
          id='name'
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
        />{" "}
        <br />
        <textarea
          rows={2}
          cols={30}
          maxLength={160}
          type='text'
          className='form-input'
          id='name'
          value={hates}
          onChange={(e) => setHates(e.target.value)}
        />
        <br />
        {disableButton ? (
          <button disabled className='button'>
            Saved
          </button>
        ) : (
          <button className='button'>Add</button>
        )}
      </form>
    </div>
  );
};

export default AddIpnut;
