import React, { useState, useContext } from "react";
import { ReviewsCntxt } from "../../store/ReviewsContext";
const AddIpnut = ({ details }) => {
  // console.log(details);
  const [likes, setLikes] = useState("");
  const [hates, setHates] = useState("");
  const ctxt = useContext(ReviewsCntxt);

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
        <input
          type='text'
          className='form-input'
          id='name'
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
        />
        <input
          type='text'
          className='form-input'
          id='name'
          value={hates}
          onChange={(e) => setHates(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddIpnut;
