
import "./AddCourse.css"
import { Navigate } from "react-router-dom";
import React, { useState } from 'react';
import Axios from 'axios';


function AddCourse() {


    const [Title, setTitle] = useState('');
    const [Sub, setSub] = useState('');
    const [Price, setPrice] = useState(0);
    const [Summary, setSummary] = useState('');
    const [Instructor, setInstructor] = useState('');

    const addCourse = () => {
        Axios.post("http://localhost:3000/insertCourse", { Title: Title, Subtitle: Sub , Price: Price , Summary : Summary})
      }


    return (
        <div className='AddCourse'>


            <div id="login">

<h1>Add Course</h1>

<form action="#" method="get">

  <fieldset>

    <p><input  onChange={(event) => { setTitle(event.target.value) }} type="text" placeholder="Email"/></p>

    <p><input onChange={(event) => { setSub(event.target.value) }}  type="text"  placeholder="Subtitle"/></p>

    <p><input onChange={(event) => { setPrice(event.target.value) }}  type="text"  placeholder="Price"/></p>
    
    <p><input onChange={(event) => { setSummary(event.target.value) }}  type="text"  placeholder="Summary"/></p>

    <p><input  onClick={addCourse} type="submit" value="ADD"/></p>

  </fieldset>

</form>


</div>


</div>
    

    );
}
export default AddCourse;