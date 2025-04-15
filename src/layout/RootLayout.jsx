import React, { useContext } from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import { UserDetails } from "../context/UserDetails";

const RootLayout = () => {
  const { userData } = useContext(UserDetails);
  // console.log(userData);

  return (
    <div className="max-vw-100w-100 pt-3 min-vh-100 ">
      <div>
        <Navbar />
       
      </div>

      <div>
        {<Login /> && <Outlet />}
      </div>
    </div>
  );
};

export default RootLayout;
