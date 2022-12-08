
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
<h2>Add Course</h2>
            <label>Title:</label>
            <input type="text"  onChange={(event) => { setTitle(event.target.value) }}></input>
            <label>Subtitles:</label>
            <input type="text" onChange={(event) => { setSub(event.target.value) }}></input>
            <label>Price:</label>
            <input type="text" onChange={(event) => { setPrice(event.target.value) }}></input>
            <label>Summary:</label>
            <input type="text" onChange={(event) => { setSummary(event.target.value) }}></input>

            <button onClick={addCourse}>Add Course</button>
     


</div>
    

    );
}
export default AddCourse;