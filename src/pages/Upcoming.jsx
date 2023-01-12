import React from "react";
import useMoviesFetch from "../hooks/useMoviesFetch";
import MovieItem from "../components/MovieItem/MovieItem";
import LoadingSpinner from "../components/Layout/UI/LoadingSpinner";
const Upcoming = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  const [data, errMsg, isLoading] = useMoviesFetch(url);
  return (
    <div>
      {isLoading && (
        <div>
          <p>Please wait. Loading data...</p>
          <LoadingSpinner />
        </div>
      )}
      {errMsg && <p>Something went wrong: {errMsg}.</p>}
      {data &&
        data.results
          .filter((movie) => movie.poster_path)
          .map((movie) => {
            return (
              <MovieItem
                key={movie.id}
                title={movie.title}
                imgSrc={movie.poster_path}
                overview={movie.overview}
                releaseDate={movie.release_date}
                rating={movie.vote_average}
                id={movie.id}
                rest={movie}
              />
            );
          })}
    </div>
  );
};

export default Upcoming;
