import "./Home.css"
import { Navigate } from "react-router-dom";
import React, { useState } from 'react';


function Home() {


    const [AdminButton, setAdminButton] = useState(false);
    const [InstructorButton, setInstructorButton] = useState(false);
    const [TraineeButton, setTraineeButton] = useState(false);

    if (AdminButton) {
        return <Navigate to="/Admin" />
    }

    if (InstructorButton) {
        return <Navigate to="/Instructor" />
    }

    if (TraineeButton) {
        return <Navigate to="/viewCourse" />
    }


    return (
        <div className='Home'>

            

            <h1 className="h1">SIGN IN AS</h1>

            <div className='button-group'>
           <button class="button1" onClick={()=>{setAdminButton(true)}}>  <i class="fa fa-home"></i>ADMIN</button>


<button class="button1" onClick={()=>{setTraineeButton(true)}}>TRAINEE</button>

<button class="button1"onClick={()=>{setInstructorButton(true)}}> INSTRUCTOR</button>


</div>
        </div>

    );
}
export default Home;