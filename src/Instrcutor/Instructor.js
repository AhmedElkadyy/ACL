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
    const [ButtonCourses, setButtonCourses] = useState(false);
    const [ButtonAddCourse, setButtonAddCourse] = useState(false);
    const [ButtonSearchCourse, setButtonSearchCourse] = useState(false);
    const [ButtonFilterCourse, setButtonFilterCourse] = useState(false);
    const [buttonLogout, setButtonLogout] = useState(false);
    

    if (ButtonAddCourse){
      return <Navigate  to="/AddCourse"/>

  }

    if (ButtonQuiz){
      return <Navigate  to="/Quiz"/>

  }
  if (ButtonProfile){
    return <Navigate  to="/Profile"/>

}


if (ButtonCourses){
  return <Navigate  to="/ShowCourses"/>

}

if (ButtonSearchCourse){
  return <Navigate  to="/SearchCourse"/>

}


if (ButtonFilterCourse){
  return <Navigate  to="/FilterCourses"/>

}

if (buttonLogout){
  
 Axios.get("http://localhost:3000/logout");
  
  return <Navigate  to="/"/>
  
 


}

    const addCourse = () => {
        Axios.post("http://localhost:3000/insertCourse", { Title: Title, Subtitle: Sub , Price: Price , Summary : Summary})
      }


    const searchCourse = () => {
        Axios.post("http://localhost:3000/searchCourse", { Instructor:Instructor , Search:Search , Result:Result })
      }

      const ViewCourse = ()=> useEffect(()=>{
        Axios.get('http://localhost:3000/ViewCourse').then((res)=>{
          // setResultView(res.data)
          console.log(res)
           
           
        })
      })

     
      

    return (




        <div className="Instructor">

{/* 
<label>insert your name:</label>
<input type="text"  onChange={(event) => { setInstructor(event.target.value) }}></input>
             */}
            
{/*            
            <h1>INSTRUCTOR PAGE</h1> */}
            


            {/* <button onClick={()=>{setButtonCourses(true)}}>View Courses</button>
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
             */}

<div class = "mybtn">
         <button class = "button2"  onClick={()=>{setButtonCourses(true)}}>VIEW COURSES</button>
         <button class = "button2" onClick={()=>{setButtonAddCourse(true)}}>ADD COURSE</button>
         <button class = "button2" onClick={()=>{setButtonSearchCourse(true)}}>SEARCH FOR COURSE</button>
         <button class = "button2" onClick={()=>{setButtonFilterCourse(true)}}>FILTER COURSES </button>
         <button class = "button2"  onClick={()=>{setButtonQuiz(true)}}>CREATE EXERCISE</button>
          <button class = "button2" onClick={()=>{setButtonProfile(true)}}>EDIT PROFILE</button>

          <button class = "button2" onClick={()=>{setButtonLogout(true)}}>LOGOUT</button>
      </div>




        </div>

    )
}

export default Instructor;

