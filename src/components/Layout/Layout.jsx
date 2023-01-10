import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "../HeaderNav";
const Layout = () => {
  return (
    <>
      <HeaderNav />
      <Outlet />
    </>
  );
};

export default Layout;
