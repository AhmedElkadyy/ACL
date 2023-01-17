import React from 'react';
import '../loginPage/Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Navigate } from 'react-router-dom';


function SigninOrLogin() {
    const [buttonLogin, setButtonLogin] = useState(false);
    const [buttonSignUp, setButtonSignUp] = useState(false);

    if (buttonSignUp){
        return <Navigate to="/paymentTerms" />
    }
    
    if (buttonLogin){
        return <Navigate to="/Home" />
    }




    return(
        <div className="login">
                      <div className="loginContainer">
            <h1 className="loginH1">WELCOME !</h1>
<br></br>
<br></br>
<br></br>
<br></br>
  
                <button className="loginBtn2" onClick={()=>{setButtonSignUp(true)}}>Sign Up</button>
                <button className="loginBtn2" onClick={()=>{setButtonLogin(true)}}>Login</button>
            </div>
        </div>

          
           

    )

    
}
export default SigninOrLogin;
