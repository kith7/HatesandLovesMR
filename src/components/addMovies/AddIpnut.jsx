import React, { useState } from "react";

const AddIpnut = (props) => {
  const [likes, setLikes] = useState("");
  const [hates, setHates] = useState("");
  const handleAdd = (e) => {
    console.log(props);
  };
  return (
    <div>
      <p>Movie loves&hates</p>
      <form>
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
        <button
          onClick={() => {
            handleAdd();
          }}
          type='button'
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddIpnut;
