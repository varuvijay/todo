import React from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="mw-100">
      <Navbar></Navbar>

      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
