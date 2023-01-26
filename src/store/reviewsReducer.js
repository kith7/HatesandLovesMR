const reviewsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "MODIFY_REVIEWS":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reviewsReducer;
