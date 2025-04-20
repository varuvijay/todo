import React, { useContext } from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import { UserDetails } from "../context/UserDetails";
import SignUp from "../pages/SignUp";

const RootLayout = () => {
  const { userDetails,signup , setSignup } = useContext(UserDetails);

  return (
    <div className="max-vw-100w-100 pt-3 min-vh-100 ">
      <div>
        <Navbar />
       
      </div>
      {/* <Outlet /> */}

      <div>
      { !userDetails?.status  ? signup ? <SignUp/>  : <Login />  : <Outlet />}

      </div>
    </div>
  );
};

export default RootLayout;
