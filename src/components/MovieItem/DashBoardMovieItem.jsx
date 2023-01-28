import React, { useState, useContext } from "react";
import classes from "./Dashboarditem.module.css";
import { ReviewsCntxt } from "../../store/ReviewsContext";
import { UserContext } from "../../store/authContext";
import {
  addReviewsToFirestore,
  getReviewsFromFirestore,
  getUserProfileData,
  updateReviesFromFireStore,
} from "../../utils/firebase/firebase";

const DashboardMovieItem = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [hates, setHates] = useState(props.hates);
  const [updated, setUpdated] = useState("");
  const ctxt = useContext(ReviewsCntxt);
  const { currentUser } = useContext(UserContext);
  const itemId = props.id;

  const handleRemove = () => {
    const itemId = props.id;
    ctxt.removeMovie(itemId);
    console.log(currentUser);
  };
  const handleUpdate = () => {
    ctxt.editMovie(itemId, likes, hates);
    addReviewsToFirestore(props, currentUser.uid);
    setUpdated("Update successful");
  };
  const getProfileData = async () => getUserProfileData(currentUser.uid);

  const getareview = async () => updateReviesFromFireStore(itemId);
  return (
    <div className={classes.card}>
      <div className={classes.card__content}>
        <img
          className={classes.cardImage}
          src={props.image}
          alt={props.title + " poster"}
        />
        <div className={classes.card__titlearea}>
          <h3 className={classes.cardTitle}>{props.title}</h3>
          <div className={classes.card__lovesnhates}>
            <div>
              <span>Loves:</span>
              <p>
                <textarea
                  rows={3}
                  cols={60}
                  maxLength={160}
                  type='text'
                  value={likes}
                  onChange={(e) => setLikes(e.target.value)}
                />
              </p>
              <span>Hates:</span>
              <p>
                <textarea
                  rows={3}
                  cols={60}
                  maxLength={160}
                  type='text'
                  value={hates}
                  onChange={(e) => setHates(e.target.value)}
                />
              </p>
              <div className={classes.card__moviebtns}>
                <button className='button' onClick={() => handleUpdate()}>
                  Update
                </button>
                <button className='button' onClick={() => handleRemove()}>
                  Remove
                </button>
              </div>
              {updated}
            </div>
          </div>
          <button onClick={() => getReviewsFromFirestore()}>
            GETFIRESTOREDATA
          </button>
          <button onClick={() => getProfileData()}>getuser data</button>
          <button onClick={() => getareview()}>get a review</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardMovieItem;
