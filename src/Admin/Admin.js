
import './Admin.css';
import Axios from 'axios';
import React, { useState } from 'react';
import { Navigate } from "react-router-dom";

function Admin() {

  const [AdminButton, setAdminButton] = useState(false);
  const [InstructorButton, setInstructorButton] = useState(false);
  const [TraineeButton, setTraineeButton] = useState(false);

  if (AdminButton) {
      return <Navigate to="/AddAdmin" />
  }

  if (InstructorButton) {
      return <Navigate to="/AddInstructor" />
  }

  if (TraineeButton) {
      return <Navigate to="/AddTrainee" />
  }


  return (
      <div className='Home'>


        

          <h1 className="h1">ADD</h1>
         <button class="button" onClick={()=>{setAdminButton(true)}}> ADMIN</button>


<button class="button" onClick={()=>{setTraineeButton(true)}}>TRAINEE</button>

<button class="button"onClick={()=>{setInstructorButton(true)}}> INSTRUCTOR</button>



      </div>

  );
}

export default Admin;
