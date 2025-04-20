import React, { useContext } from "react";
import "./taskList.css";
import axios from "axios";
import del from "./trash-solid.svg";
import edit from "./edit.svg";
import { UserDetails } from "../context/UserDetails";
import { useNavigate } from "react-router-dom";

const TaskList = ({ value, index, onDeleteSuccess }) => {
  const navigate = useNavigate();
  const { userDetails } = useContext(UserDetails);

  const onClickToDelete = async (value) => {
    try {
      const id = Number(value.id);
      console.log("Deleting ID:", id);

      const res = await axios.delete(`http://localhost:80/api/tasks/${id}`, {
        headers: { "X-Session-ID": userDetails?.sessionId },
      });

      console.log("Deleted:", res.data);

      // Trigger callback to refresh list
      onDeleteSuccess();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div id="card" key={index} style={{
      border: value.status === "Pending" ? "1px solid red" : "1px solid green",
    }}>
      <div
        className="container d-flex justify-content-end w-100  rounded-5 gap-3"
        
      >
        <div>
          
        </div>
        <div onClick={() => navigate("/edit", { state: { value: value } })}>
          <img src={edit} alt="Edit" id="editimg" />
        </div>
        <div onClick={() => onClickToDelete(value)}>
          <img src={del} alt="Delete" id="delimg" />
        </div>
      </div>

      <h4 id="title">{value.name}</h4>

      <p>
        {value.description?.length > 50
          ? value.description.slice(0, 50) + " . . . . ."
          : value.description}
      </p>

      
    </div>
  );
};

export default TaskList;
