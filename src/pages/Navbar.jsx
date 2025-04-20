import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { UserDetails } from "../context/UserDetails";

const Navbar = () => {

let {userDetails,setUserDetails,setLogin} = useContext(UserDetails);

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("http://localhost:80/api/auth/logout", data, {
                headers: {'X-Session-ID': userDetails.sessionId}
            });
            setUserDetails(res.data);
            setLogin(true);
            console.log("logged out");
        } catch (err) {
            console.log(err);
            setUserDetails(null);

            setLogin(true);
        }
    }


  let icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-box-arrow-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
      />
      <path
        fillRule="evenodd"
        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
      />
    </svg>
  );
  return (
    <div
      className=" shadow container  align-content-center rounded-5 border  "
      style={{ height: "10vh" }}
    >
      <nav className="navbar navbar-expand-lg  px-xxl-5    align-items-center  ">
        <div className="container-fluid ">
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            <span className="fs-3">Home</span>
          </NavLink>
        </div>
        <div className="container-fluid justify-content-end">
         
            <button
              type="button"
              class="logoutBtn"
             
              onClick={() => onSubmit()}
            >
             {icon} Logout
            </button>
            

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
