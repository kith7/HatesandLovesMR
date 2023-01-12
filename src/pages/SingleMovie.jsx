import React from "react";
import useMoviesFetch from "../hooks/useMoviesFetch";
import LoadingSpinner from "../components/Layout/UI/LoadingSpinner";
const MostPopular = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

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
            return <p>{movie.title}</p>;
          })}
    </div>
  );
};

export default MostPopular;
