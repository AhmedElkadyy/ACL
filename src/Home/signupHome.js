import "./Home.css"
import { Navigate } from "react-router-dom";
import React, { useState } from 'react';


function SignupHome() {


    const [AdminButton, setAdminButton] = useState(false);
    const [InstructorButton, setInstructorButton] = useState(false);
    const [TraineeButton, setTraineeButton] = useState(false);
    const [CorporateButton, setCorporateButton] = useState(false);

    if (AdminButton) {
        return <Navigate to="/signupAdmin" />
    }

    if (InstructorButton) {
        return <Navigate to="/signupInstructor" />
    }

    if (TraineeButton) {
        return <Navigate to="/signupTrainee" />
        //go to after login viewCourse
    }

    if (CorporateButton) {
        return <Navigate to="/signupCorporate" />

    }
    


    return (
        <div className='Home'>
            <div className='loginContainer'>

            

            <h1 className="loginH1">SIGN UP AS</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            

            <div className='button-group'>
           <button class="button1" onClick={()=>{setAdminButton(true)}}>  <i class="fa fa-home"></i>ADMIN</button>


<button class="button1" onClick={()=>{setTraineeButton(true)}}>TRAINEE</button>

<button class="button1"onClick={()=>{setInstructorButton(true)}}> INSTRUCTOR</button>

<button class="button1"onClick={()=>{setCorporateButton(true)}}> CORPORATE</button>


</div>


</div>

        </div>

    );
}
export default SignupHome;