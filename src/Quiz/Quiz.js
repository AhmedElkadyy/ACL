import './Quiz.css'
import { Navigate } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import Axios from 'axios';


function Quiz() {
    const [Question,SetQuestion]=useState("");
    const [Answer,SetAnswer]=useState("");
    const [Wrong1,SetWrong1]=useState("");
    const [Wrong2,SetWrong2]=useState("");
    const [Wrong3,SetWrong3]=useState("");
  
    const [CourseName,SetCourseName]=useState("");
    const [CourseNameList,SetCourseNameList]=useState([]);
  
  
     
    useEffect(() =>{
      Axios.get("http://localhost:3000/read").then((response)=>{
        console.log(response);
        SetCourseNameList(response.data);
  
  
      })
      
  
  
    },[])
  
  
    const UpdateExercises =() =>{
      console.log(Question+"="+Answer+"  "+CourseName);
      Axios.put("http://localhost:3000/update",{
        Question : Question,
        Answer : Answer,
        CourseName :CourseName,
        Wrong1 :Wrong1,
        Wrong2 :Wrong2,
        Wrong3 :Wrong3,
  
  
        
  
  
      });
      
  
    }
  
    return (
      <div className="App">
        <h1>Create Exrecise</h1>
        <br></br>
        <select onChange={(event)=>{
          SetCourseName(event.target.value);
        }}>
          <option> {"choose course"}</option>
          
      {CourseNameList.map((val,key)=>{
        return <option> {val.Title}</option>
      })}
      </select>
       
        <h1>Type Question</h1>
        <textarea name="question" rows="8" cols="50" placeholder="Question" onChange={(event)=>{
          SetQuestion(event.target.value);
        }}></textarea>
        <h1>Type Answer</h1>
        <textarea name="Answer" rows="1" cols="20" placeholder="The Right Answer" onChange={(event)=>{
          SetAnswer(event.target.value);
        }} ></textarea>
              <textarea name="Answer" rows="1" cols="20" placeholder="The Wrong Answer" onChange={(event)=>{
          SetWrong1(event.target.value);
        }} ></textarea>      <textarea name="Answer" rows="1" cols="20" placeholder="The Wrong Answer" onChange={(event)=>{
          SetWrong2(event.target.value);
        }} ></textarea>      <textarea name="Answer" rows="1" cols="20" placeholder="The Wrong Answer" onChange={(event)=>{
          SetWrong3(event.target.value);
        }} ></textarea>
        <br></br>
        <br></br>
  
        <button onClick={UpdateExercises}>Submit</button>
  
  
        
      </div>
    );
  }
  export default Quiz;