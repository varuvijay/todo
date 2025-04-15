import React from "react";

const Logout = () => {
  return (
    
    <div className="container-fluid vh-25 vw-100  d-flex justify-content-start p-3">
     <div className="container"></div>
      <div className="container w-auto h-25 d-flex flex-column justify-content-center  p-4 rounded-4 border-top  shadow-lg gap-3">
        <span>are u shure u want to logout</span>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-primary ">
            Button
          </button>
        </div>
      </div>

    </div>
  );
};

export default Logout;
