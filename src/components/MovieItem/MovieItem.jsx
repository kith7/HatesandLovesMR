import React from "react";
import classes from "./MovieItem.module.css";
import AddIpnut from "../addMovies/AddIpnut";
const MovieItem = (props) => {
  const details = {
    ...props,
    image: `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.imgSrc}`,
  };
  return (
    <div className={classes.card}>
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
      <AddIpnut details={details} />
    </div>
  );
};

export default MovieItem;
