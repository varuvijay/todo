import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { UserDetails } from "../context/UserDetails.jsx";
import { NavLink } from 'react-router-dom';
import TaskList from '../components/TaskList.jsx';


const Home = () => {
  const { userDetails } = useContext(UserDetails);
  const [fetchedData, setFetchedData] = useState([]);


  const fetchTasks  = async () => {
    try {
      const res = await axios.get("http://localhost:80/api/tasks/", {
        headers: { 'X-Session-ID': userDetails?.sessionId },
      });
      console.log(res.data);
      
      setFetchedData(res.data); 
    } catch (err) {
      
      console.error("Failed to fetch data:", err);
    }
  };
  useEffect(() => {
   

    fetchTasks();
  }, [userDetails]);

  return (
    <div className='h-auto mb-5'>
      <NavLink to="/create" className="btn btn-outline-light ">Create</NavLink>
<div className='d-flex gap-5 flex-wrap justify-content-center '>
      {fetchedData.length > 0 ? (
        fetchedData.map((value, index) => (
         <TaskList value={value} key={index} onDeleteSuccess={fetchTasks}/>

        ))
      ) : (
        <p>Loading or no data...</p>
      )}
</div>
    </div>
    
  );
};

export default Home;
