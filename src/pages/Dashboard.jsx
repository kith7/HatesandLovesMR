import React, { useContext } from "react";
import { ReviewsCntxt } from "../store/ReviewsContext";

const Dashboard = () => {
  const ctxt = useContext(ReviewsCntxt);
  return (
    <div>
      <button
        onClick={() => {
          console.log(ctxt);
        }}
      ></button>
    </div>
  );
};

export default Dashboard;
