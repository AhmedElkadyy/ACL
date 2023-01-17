import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


import {Navigate} from "react-router-dom";
import SignUp from '../signupPage/signup';




function AdminLogin () {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [buttonLogin, setButtonLogin] = useState(false);
    const [buttonSignUp, setButtonSignUp] = useState(false);
    const [buttonForgotPassword, setButtonForgotPassword] = useState(false);
const [loggedIn, setLoggedIn] = useState(false);

    if (buttonSignUp){

        return <Navigate to="/signupAdmin" />    
    }


if (buttonLogin ) {
        Axios.post("http://localhost:3000/loginAdmin", { Email: Email, Password: Password});
        // if (loggedIn == true){
            return <Navigate to="/admin" />
        // }



        
      }

    //   Axios.get("http://localhost:3000/loggedIn").then((response) => {
    //     if (response.data.loggedIn == true) {
    //         setLoggedIn(true);
            
    //     }
    // });



      if(buttonForgotPassword){
       return <Navigate to="/forgotPassword" />

        }




    return (
        <div>
            
        <div className="login">

            <div className="loginContainer">

                <h1 className='loginH1'>ADMIN LOGIN </h1>

                <div className="loginForm">

                
                <label className='loginLabel'>Email</label>
                <input type="text" placeholder="Enter Email" className='loginInput' onChange={(event) => { setEmail(event.target.value)}}/>
                <label className='loginLabel'>Password</label>
                <input type="text" placeholder="Enter password"  className='loginInput' onChange={(event) => { setPassword(event.target.value)}}/>
                <button className="loginBtn"   onClick={()=>{setButtonForgotPassword(true)}}>Forgot Password?</button>
                <button className="loginBtn" onClick={()=>{setButtonLogin(true)}}>Login</button>
            

             
                <button className='loginBtn' onClick={()=>{setButtonSignUp(true)}}>Create a New Account </button>
                
           











        </div>
        </div>
        </div>
        </div>


    



        );

}

export default AdminLogin;
