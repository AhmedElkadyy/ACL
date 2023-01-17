import React from 'react'  
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {Navigate} from "react-router-dom";



function VerficationCode(){

    
    const [ButtonSubmit, setButtonSubmit] = useState(false);
    const [code, setCode] = useState('');

    if (ButtonSubmit){
        Axios.post("http://localhost:3000/checkCode", { code: code});
        return <Navigate to="/changepassword" />
        
    }



    return (




        <div className="login">
            <div className="loginContainer">
                <h1 className="loginH1">VERFICATION CODE</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <input  className='loginInput' type="text" placeholder="Enter Verfication Code" onChange={(event) => { setCode(event.target.value)}}></input>
               
                <button className="loginBtn"  onClick={()=>{setButtonSubmit(true)}}>Submit</button>
            </div>
        </div>

    )

        

}

export default VerficationCode;
