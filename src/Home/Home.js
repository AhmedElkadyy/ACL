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
        return <Navigate to="/Trainee" />
    }


    return (
        <div className='Home'>
            <button onClick={() => { setAdminButton(true) }}>Sign In as Admin</button>
            <button onClick={() => { setInstructorButton(true) }}>Sign In as Instructor</button>
            <button onClick={() => { setTraineeButton(true) }}>Sign In as Trainee</button>

        </div>

    );
}
export default Home;