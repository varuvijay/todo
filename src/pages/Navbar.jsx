import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-box-arrow-right"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
      />
      <path
        fill-rule="evenodd"
        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
      />
    </svg>
  );
  return (
    <div
      class=" shadow container  align-content-center "
      style={{ height: "10vh" }}
    >
      <nav class="navbar navbar-expand-lg bg-body-tertiary px-xxl-5    align-items-center  ">
        <div class="container-fluid ">
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            <span className="fs-3">Home</span>
          </NavLink>
        </div>
        <div class="container-fluid justify-content-end">
          <NavLink
            to="/logout"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span className="fs-4"> {icon} logout</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
