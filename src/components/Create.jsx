import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserDetails } from "../context/UserDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const { userDetails } = useContext(UserDetails);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    // defaultValues: {
    //   status: "Pending",
    // },
  });

  const onSubmit = async (data) => {
    try {
      console.log("Session ID:", userDetails.sessionId);
      console.log("Form Data:", data);

      const res = await axios.post("http://localhost:80/api/tasks/", data, {
        headers: { "X-Session-ID": userDetails.sessionId },
      });

      console.log("Task Created:", res.data);

      // Redirect to home after successful creation
      navigate("/");
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  return (
    <div
      className="container mh-100 d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name && (
            <small className="text-danger">Title is required (min 3 chars)</small>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            rows="3"
            className="form-control"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <small className="text-danger">Description is required</small>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            City
          </label>
          <select
            className="form-select form-select-lg"
            {...register("status", { required: true })}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
