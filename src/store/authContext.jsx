import React, { useEffect, useState } from "react";

const UserCntxt = React.createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const UserCtxtProvider = (props) => {
  return <UserCntxt.Provider>{props.children}</UserCntxt.Provider>;
};
