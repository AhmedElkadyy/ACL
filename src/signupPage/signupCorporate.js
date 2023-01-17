import React from 'react';
import '../loginPage/Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Navigate } from 'react-router-dom';







function CorporateSignUp (){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [buttonSignUp, setButtonSignUp] = useState(false);
    const [buttonLogin, setButtonLogin] = useState(false);

  


    const signUp = () => {
        Axios.post("http://localhost:3000/signupCoporate", { username: username, email: email, password: password})


    }


    
    if (buttonLogin){
        return <Navigate to="/loginCorporate" />
    }

    



    return (

        <div className='loginContainer'>
            <h1 className='loginH1'>CORPORATE TRAINEE SIGN UP</h1>
            <br></br>
            <br></br>
                <form className='loginForm'> 

                <label className='loginLabel'>Username</label>
                <input className='loginInput' type="text" placeholder="Enter usename" name="username"  onChange={(event) => { setUsername(event.target.value)}}/>

                <label className='loginLabel'>Email</label>
                <input className='loginInput' placeholder="Enter Email" type="text" name="Email"  onChange={(event) => { setEmail(event.target.value)}} />

                <label className='loginLabel'>Password</label>
                <input className='loginInput' placeholder="Enter Password" type="text" name="password"  onChange={(event) => { setPassword(event.target.value)}} />


                <button className='loginBtn'  type="submit" onClick={signUp}  >Sign Up</button>
              
                <button className='loginBtn' onClick={()=>{setButtonLogin(true)}}>Already have an account?</button>
                

                
            </form>
        </div>
   
    )
}


export default CorporateSignUp;