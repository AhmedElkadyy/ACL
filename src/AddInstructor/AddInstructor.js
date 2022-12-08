import './AddInstructor.css';
import Axios from 'axios';
import React, { useState } from 'react';

function AddInstructor() {

  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')

  
 

  const addInstructor = () => {
    Axios.post("http://localhost:3000/insertInstructor", { Email: Email, Pass: Pass })
  }



  return (

    <div className="App">
       <div className="App">
      
     
      <div id="login">

<h1>Add Instrcutor</h1>

<form action="#" method="get">

  <fieldset>

    <p><input  onChange={(event) => { setEmail(event.target.value) }} type="text" placeholder="Username"/></p>

    <p><input onChange={(event) => { setPass(event.target.value) }}  type="password"  placeholder="Password"/></p>

    <p><input  onClick={addInstructor} type="submit" value="ADD"/></p>

  </fieldset>

</form>


</div>

    

    </div>
    

    </div>
  );
}

export default AddInstructor;
