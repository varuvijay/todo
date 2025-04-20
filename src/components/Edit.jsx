import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserDetails } from '../context/UserDetails';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Edit = () => {
  const location = useLocation();
  const { value } = location.state || {};
  const navigate = useNavigate();
  const { userDetails } = useContext(UserDetails);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: value?.name || '',
      description: value?.description || '',
      status: value?.status || 'Pending',
    },
  });

  const onSubmit = async (data) => {
    try {
      const id = value?.id;
      const res = await axios.put(`http://localhost:80/api/tasks/${id}`, data, {
        headers: { 'X-Session-ID': userDetails?.sessionId },
      });
      console.log('Task updated:', res.data);
      navigate('/');
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  return (
    <div
      className="container mh-100 d-flex justify-content-center align-items-center"
      style={{ height: '90vh' }}
    >
      <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            {...register('name', { required: true, minLength: 3 })}
          />
          {errors.name && (
            <small className="text-danger">Title is required (min 3 chars)</small>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            rows="3"
            className="form-control"
            {...register('description', { required: true })}
          ></textarea>
          {errors.description && (
            <small className="text-danger">Description is required</small>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-select form-select-lg"
            {...register('status', { required: true })}
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
};

export default Edit;
