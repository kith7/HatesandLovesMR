import React, { useContext, useEffect } from "react";
import { ReviewsCntxt } from "../store/ReviewsContext";
import DashboardMovieItem from "../components/MovieItem/DashBoardMovieItem";

const Dashboard = () => {
  const ctxt = useContext(ReviewsCntxt);
  const { reviews } = ctxt.reviewsState;
  console.log(reviews);
  const Movies = reviews.map((review) => (
    <DashboardMovieItem
      key={review.id}
      id={review.id}
      image={review.image}
      title={review.title}
      likes={review.likes}
      hates={review.hates}
    />
  ));

  const noMoviews = (
    <div className='card centered'>
      <h3>
        To use the Dashboard, first you need to add some reviews in order to
        manage them here.
      </h3>
    </div>
  );

  return <div>{Movies.length === 0 ? noMoviews : Movies}</div>;
};

export default Dashboard;

// image
// title
// likes
// hates
