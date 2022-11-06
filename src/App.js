
import './App.css';
import Axios from 'axios';
import React, { useState } from 'react';

function App() {

  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')

  const [Email1, setEmail1] = useState('')
  const [Pass1, setPass1] = useState('')

  const [Email2, setEmail2] = useState('')
  const [Pass2, setPass2] = useState('')

  const addAdmin = () => {
    Axios.post("http://localhost:3000/insertAdmin", { Email: Email, Pass: Pass })
  }

  const addInstructor = () => {
    Axios.post("http://localhost:3000/insertInstructor", { Email: Email1, Pass: Pass1 })
  }

  const addTrainee = () => {
    Axios.post("http://localhost:3000/insertTrainee", { Email: Email2, Pass: Pass2 })
  }

  return (

    <div className="App">
      <h1>ADMIN PAGE</h1>
      <h2>ADD ADMIN</h2>
      <label> Username:</label>
      <input type="text" onChange={(event) => { setEmail(event.target.value) }} />
      <label> Password:</label>
      <input type="text" onChange={(event) => { setPass(event.target.value) }} />

      <button onClick={addAdmin}>Add Admin</button>

      <br></br>
      <br></br>

      <h2>ADD INSTRUCTOR</h2>
      <label> Username:</label>
      <input type="text" onChange={(event) => { setEmail1(event.target.value) }} />
      <label> Password:</label>
      <input type="text" onChange={(event) => { setPass1(event.target.value) }} />

      <button onClick={addInstructor}>Add Instructor</button>



      <br></br>
      <br></br>

      <h2>ADD TRAINEE</h2>
      <label> Username:</label>
      <input type="text" onChange={(event) => { setEmail2(event.target.value) }} />
      <label> Password:</label>
      <input type="text" onChange={(event) => { setPass2(event.target.value) }} />

      <button onClick={addTrainee}>Add Trainee</button>


    </div>
  );
}

export default App;
