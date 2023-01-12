import React, { Fragment } from "react";
import classes from "./MoviesList.module.css";
import MovieItem from "./MovieItem/MovieItem";
import AddIpnut from "./addMovies/AddIpnut";
const MoviesList = ({ movies }) => {
  const List = movies
    .filter((movie) => movie.poster_path)
    .map((movie) => {
      return (
        <Fragment key={movie.id}>
          <MovieItem
            title={movie.title}
            imgSrc={movie.poster_path}
            overview={movie.overview}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
            id={movie.id}
          />
        </Fragment>
      );
    });
  return [List];
};

export default MoviesList;

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
