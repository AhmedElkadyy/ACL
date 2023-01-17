
import React, {useState} from 'react'

import {Link} from 'react-router-dom'

 import Axios from 'axios';
    import {Navigate} from "react-router-dom";




function ForgetPassword(){
    
    
    const [email, setEmail] = useState("");
    const [ButtonSubmit, setButtonSubmit] = useState(false);


if (ButtonSubmit){

    Axios.post("http://localhost:3000/sendEmail", { email: email})
    return <Navigate to="/verficationCode" />
}

    return (
        <div>
         
            <div className="loginContainer">
               
            <h1 className="loginH1">FORGET PASSWORD</h1>

                <div className="loginForm">
                    <label className="loginLabel" >Email</label>
                    <input type="text" placeholder="Enter Email" className="loginInput"  onChange={(event) => { setEmail(event.target.value)}}/>

                    <button className="loginBtn" onClick={()=>{setButtonSubmit(true)}}>Send Email</button>




        </div>
        </div>
        </div>
    )
}

export default ForgetPassword;