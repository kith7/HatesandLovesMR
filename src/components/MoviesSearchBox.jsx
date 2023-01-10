import React, { Fragment, useState } from "react";
import classes from "./MoviesSearchBox.module.css";
import MoviesList from "./MoviesList";
import LoadingSpinner from "./Layout/UI/LoadingSpinner";
// https://api.themoviedb.org/3/search/movie?api_key=`API_KEY`&query=Jack+Reacher

const MoviesSearchBox = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setisLoading(true);
    setErrMsg("");
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(res);
    if (data.results) {
      setMovies(data.results);
      setisLoading(false);
      setErrMsg("");
      console.log(movies);
    }
    if (data.errors) {
      setErrMsg(data.errors[0]);
      console.log(errMsg);
      setisLoading(false);
    }
    setisLoading(false);
  };

  return (
    <Fragment>
      <form onSubmit={(e) => handleSearch(e)} className={classes.form}>
        <label className={classes.label} htmlFor='search_input'>
          Movie title{" "}
        </label>
        <input
          className={classes.input}
          id='search_input'
          type='text'
          name='query'
          placeholder='e.g. Dune Imperium'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className='button'>Find</button>
      </form>
      <div>
        {isLoading && (
          <div>
            <p>Please wait. Loading data...</p>
            <LoadingSpinner />
          </div>
        )}
        {errMsg && <p>Something went wrong: {errMsg}.</p>}
        {!isLoading && (
          <MoviesList movies={movies} className={classes.cardList} />
        )}
      </div>
    </Fragment>
  );
};

export default MoviesSearchBox;
