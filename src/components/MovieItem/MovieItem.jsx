import React from "react";
import classes from "./MovieItem.module.css";

const MovieItem = (props) => {
  return (
    <div key={props.id} className={classes.card}>
      <h3 className={classes.cardTitle}>{props.title}</h3>
      <img
        className={classes.cardImage}
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.imgSrc}`}
        alt={props.title + " poster"}
      />
      <p>{props.overview}</p>
      <small>RELEASE DATE: {props.releaseDate}</small>
      <br />
      <small>RATING: {props.rating}</small>
    </div>
  );
};

export default MovieItem;

// <div key={movie.id}>
//   <h3>{movie.title}</h3>
//   <img
//     src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
//     alt={movie.title + " poster"}
//   />
//   <p>{movie.overview}</p>
//   <p>
//     <small>RELEASE DATE: {movie.release_date}</small>
//   </p>
//   <p>
//     <small>RATING: {movie.vote_average}</small>
//   </p>
// </div>
