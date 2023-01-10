import React from "react";
import MoviesSearchBox from "../components/MoviesSearchBox";
const ErrorPage = () => {
  return (
    <>
      <MoviesSearchBox />
      <h3>Something went wrong. Couldn't find page you were looking for</h3>
    </>
  );
};

export default ErrorPage;
