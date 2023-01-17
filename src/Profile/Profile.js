import './Profile.css'
import Axios from 'axios';
import React, { useState } from 'react';
import {Navigate} from "react-router-dom";

function Profile(){

    

    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [password, setPassword] = useState('');
    const [ButtonSubmit, setButtonSubmit] = useState(false);

   const editProfile = () => {
        Axios.post("http://localhost:3000/updateMyProfile", { email: email,password:password, bio: bio})
      


    }

    return(
        <div className='Profile'>
         <h1>Edit Profile</h1>
         <h2>mail:</h2>
         <input type="text" onChange={(event) => { setEmail(event.target.value) }} />
            <h2>password:</h2>
            <input type="text" onChange={(event) => { setPassword(event.target.value) }} />
         <h2>bio:</h2>
            <input type="text" onChange={(event) => { setBio(event.target.value) }} />
         <button onClick={editProfile}>Submit</button>



              
        </div>

    );
}
export default Profile ;