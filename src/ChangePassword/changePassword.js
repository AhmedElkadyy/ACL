import React from 'react';

import { Link } from 'react-router-dom'
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

import {Navigate} from "react-router-dom";



function ChangePassword(){
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');



    const changePassword = () => {
        Axios.post("http://localhost:3000/changePassword", { Email: Email, Password: Password})
    }
       
    return (
    
        <div>
  
            <div className="login">
                <div className="loginContainer">
                    <h1 className="loginH1">Change Password</h1>
                    <div className="loginForm">
                        <label className="loginLabel">Email</label>
                        <input type="text" placeholder="Enter Email" className="loginInput" onChange={(event) => { setEmail(event.target.value)}}/>

                        <label className="loginLabel">Password</label>
                        <input type="text" placeholder="Enter password"  className="loginInput" onChange={(event) => { setPassword(event.target.value)}}/>
                        <button className="loginBtn" onClick={changePassword}>Change Password</button>
                        
                    
      

           
           
                    </div>
                </div>
            </div>
        </div>




    )

        
}



export default ChangePassword;
