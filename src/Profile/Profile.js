import './Profile.css'
import Axios from 'axios';
import React, { useState } from 'react';
import {Navigate} from "react-router-dom";

function Profile(){

    

    const [Email, setEmail] = useState('');
    const [ButtonSubmit, setButtonSubmit] = useState(false);

    if (ButtonSubmit){
        return <Navigate  to="/Instructor"/>
    
    }
    return(
        <div className='Profile'>
         <h1>Edit Profile</h1>
         <h2>mail:</h2>
         <input type="text" onChange={(event) => { setEmail(event.target.value) }} />
         <h2>bio:</h2>
         <input type="text"  />
         <button onClick={()=>{setButtonSubmit(true)}}>Submit</button>



              
        </div>

    );
}
export default Profile ;