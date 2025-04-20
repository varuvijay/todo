import React, { useContext } from "react";
import { data, NavLink, Outlet } from "react-router-dom";
import { UserDetails } from "../context/UserDetails";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  let { setLogin,  setSignup, setUserDetails } = useContext(UserDetails);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:80/api/auth/login', data, {
        withCredentials: true
      })

      setUserDetails(res.data)
      console.log(res.data);
      if (res.data.status === "true")
        setLogin(true);

    } catch {
      console.log("enter the correct data");

    }

  };


  const signUpClicked = () => {
setSignup(true);
  }


  // console.log(watch(data));

  return (
    <div
      className="container-fluid  mh-100 d-flex justify-content-center align-items-center  "
      style={{ height: "90vh " }}
    >
      {isSubmitting && <div>is loading</div>}
      <div className=" border w-auto p-5 rounded-5 shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Name
            </label>
            <input
              {...register("username")}
              type="text"
              className="form-control"
              placeholder="enter your name........"
              autoComplete="true"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="form-control"
              placeholder="enter your password ........"
            />
          </div>
          <div className="d-flex justify-content-between mt-4">
            <NavLink to="/signup" onClick={signUpClicked}>Signup</NavLink>
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
