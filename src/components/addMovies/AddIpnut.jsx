import React, { useState, useContext } from "react";
import { ReviewsCntxt } from "../../store/ReviewsContext";
const AddIpnut = ({ details }) => {
  const [likes, setLikes] = useState("");
  const [hates, setHates] = useState("");
  const ctxt = useContext(ReviewsCntxt);

  const disableButton = ctxt.reviewsState.reviews.find(
    (movie) => movie.id === details.id
  );

  const handleAdd = (e) => {
    e.preventDefault();
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
