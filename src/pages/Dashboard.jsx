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
        First, add some movies, next go back to your dashboard to manage edit or
        remove them from your database.
      </h3>
    </div>
  );

  return (
    <div>
      {Movies.length === 0 ? noMoviews : Movies}
      <button
        onClick={() => {
          console.log(ctxt);
        }}
      >
        Get clicked
      </button>
    </div>
  );
};

export default Dashboard;

// image
// title
// likes
// hates
