import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserDetails } from "../context/UserDetails";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    let {   setSignup } = useContext(UserDetails);
    const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:80/api/auth/register', data, {
        withCredentials: true // important for session-based auth
      });
      console.log(data);
      console.log('✅ Login success:', res.data);
      setSignup(false)
      navigate("/")
    } catch (err) {
      console.error('❌ Login failed:', err.response?.data || err.message);
    }
  };

  return (
    <div
      className="container-fluid mh-100 d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <div className="w-auto p-5 rounded-5 shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              placeholder="Enter your name"
              {...register("username", { required: "Name is required" })}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="abc@mail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;





































// import React from "react";

// const SignUp = () => {







//   return (
//     <div
//       className="container-fluid  mh-100 d-flex justify-content-center align-items-center  "
//       style={{ height: "90vh " }}
//     >
//       <div className=" w-auto p-5 rounded-5 shadow-lg">
//         <form action="">
//           <div class="mb-3">
//             <label for="name" class="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               class="form-control"
//               name="name"
//               id="name"
//               aria-describedby="helpId"
//               placeholder="enter your name........"
//             />
//           </div>
//           <div class="mb-3">
//             <label for="password" class="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               class="form-control"
//               name="password"
//               id="password"
//               placeholder="enter your password ........"
//             />
//           </div>

//           <div class="mb-3">
//             <label for="email" class="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               class="form-control"
//               name="email"
//               id="email"
//               aria-describedby="emailHelpId"
//               placeholder="abc@mail.com"
//             />
//             <small id="emailHelpId" class="form-text text-muted">
//               Help text
//             </small>
//           </div>

//           <div class="d-flex justify-content-end mt-4">
//             <button
//               type="button"
//               name="submit"
//               id="submit"
//               class="btn btn-primary"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
