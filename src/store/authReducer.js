const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CUR_USER":
      return {
        ...state,
        curUser: payload,
      };
    default:
      return state;
  }
};
export default authReducer;
