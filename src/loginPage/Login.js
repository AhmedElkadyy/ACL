import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


import {Navigate} from "react-router-dom";




function Login () {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

     
    const login = () => {
        Axios.post("http://localhost:3000/login", { Email: Email, Password: Password})

        
      }

    return (
        <div>
            
        <div className="login">

            <div className="loginContainer">

                <h1 className='loginH1'>LOGIN PAGE</h1>

                <div className="loginForm">

                
                <label className='loginLabel'>Email</label>
                <input type="text" placeholder="Enter Email" className='loginInput' onChange={(event) => { setEmail(event.target.value)}}/>
                <label className='loginLabel'>Password</label>
                <input type="text" placeholder="Enter password"  className='loginInput' onChange={(event) => { setPassword(event.target.value)}}/>
                <span className="loginLabel">Forgot Password?</span>
                <button className="loginBtn" onClick={login}>Login</button>
                <button className="loginBtn">Create a New Account</button>








        </div>
        </div>
        </div>
        </div>


    



        );

}

export default Login;
