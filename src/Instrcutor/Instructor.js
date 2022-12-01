import "./Instructor.css";
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Navigate} from "react-router-dom";

function Instructor() {

    const [Title, setTitle] = useState('');
    const [Sub, setSub] = useState('');
    const [Price, setPrice] = useState(0);
    const [Summary, setSummary] = useState('');
    const [Instructor, setInstructor] = useState('');
    const [Search, setSearch] = useState('');
    const [Result, setResult] = useState('');
    const [ResultView, setResultView] = useState('');
    const [ButtonQuiz, setButtonQuiz] = useState(false);
    const [ButtonProfile, setButtonProfile] = useState(false);

    if (ButtonQuiz){
      return <Navigate  to="/Quiz"/>

  }
  if (ButtonProfile){
    return <Navigate  to="/Profile"/>

}

    const addCourse = () => {
        Axios.post("http://localhost:3000/insertCourse", { Title: Title, Subtitle: Sub , Price: Price , Summary : Summary})
      }


    const searchCourse = () => {
        Axios.post("http://localhost:3000/searchCourse", { Instructor:Instructor , Search:Search , Result:Result })
      }

      const ViewCourse = ()=> useEffect(()=>{
        Axios.get('http://localhost:3000/ViewCourse').then((res)=>{
          setResultView(res.data)
           
           
        })
      })

     
      

    return (




        <div className="Instructor">


<label>insert your name:</label>
<input type="text"  onChange={(event) => { setInstructor(event.target.value) }}></input>
            
            
            <br></br>
            <br></br>
            <h1>Instructor Page</h1>
            <br></br>


            <button onClick={ViewCourse}>View Courses</button>
            {ResultView}


            <br></br>
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

            <br></br>
            <br></br>
            <h2>Search for Course</h2>

            <label>Search by:</label>
            <input type="text" onChange={(event) => { setSearch(event.target.value) }}></input>
            
            <label>Search:</label>
            <input type="text" onChange={(event) => { setResult(event.target.value) }}></input>

            <button onClick={searchCourse}>Search Course</button>
            <br></br>

            <button onClick={()=>{setButtonQuiz(true)}}>Create Quiz</button>
            <br></br>
            <button onClick={()=>{setButtonProfile(true)}}>Edit Profile</button>
            




        </div>

    )
}

export default Instructor;

