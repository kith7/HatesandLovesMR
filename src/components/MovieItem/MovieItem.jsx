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
      <img
        className={classes.cardImage}
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.imgSrc}`}
        alt={props.title + " poster"}
      />
      <div className={classes.card__content}>
        <h3 className={classes.cardTitle}>{props.title}</h3>
        <p className={classes.card__overview}>{props.overview}</p>
        <div className={classes.card__rating}>
          <div>
            <p>
              <small>RELEASE DATE: {props.releaseDate}</small>
              <br />
              <small>RATING: {props.rating}</small>
            </p>
          </div>
          <div className={classes.card__input}>
            <AddIpnut details={details} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
