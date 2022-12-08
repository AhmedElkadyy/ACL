import './AddTrainee.css';
import Axios from 'axios';
import React, { useState } from 'react';

function AddTrainee() {

  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')

  
 

  const addTrainee = () => {
    Axios.post("http://localhost:3000/insertTrainee", { Email: Email, Pass: Pass })
  }



  return (

    <div className="App">
      
     
    <div id="login">

<h1>Add Trainee</h1>

<form action="#" method="get">

<fieldset>

  <p><input  onChange={(event) => { setEmail(event.target.value) }} type="text" placeholder="Username"/></p>

  <p><input onChange={(event) => { setPass(event.target.value) }}  type="password"  placeholder="Password"/></p>

  <p><input  onClick={addTrainee} type="submit" value="ADD"/></p>

</fieldset>

</form>


</div>

  

  </div>
  );
}

export default AddTrainee;
