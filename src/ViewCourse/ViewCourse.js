import "./ViewCourse.css"
import { Navigate } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import Axios from 'axios';
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

function ViewCourse() {
  const [courseList, setCourseList] = useState ([])
  const [SearchPar, setSearchPar] = useState ('')
  const [button, setButton] = useState (false)
  const [button2, setButton2] = useState (false)
  const [button3, setButton3] = useState (false)
  const [button4, setButton4] = useState (false)
  const [rateins ,Rateinstructor]= useState(0);
  const [rateco,ratecourse]=useState(0);
  const [Title,titlechoosen]=useState("");
  const [CourseName,SetCourseName]=useState([]);
  const [traineename,settraineename]=useState([]);
  const [Email,SetEmail]=useState("");
  

  
  useEffect(() => {
      Axios.get("http://localhost:3000/viewCourse").then(function (response) {
        setCourseList(response.data);
      });
      Axios.get("http://localhost:3000/readcourses").then(function (response) {
        SetCourseName(response.data);
      });
      Axios.get("http://localhost:3000/readinstructor").then(function (response) {
        settraineename(response.data);
      });


    },[] );

    if (button){
        return <Navigate  to="/SearchCourseR"/>}

     if (button2){
      return <Navigate  to="/viewDetails"/>}

      if (button3){
        return <Navigate  to="/filterPar"/>}

        if (button4){
          return <Navigate  to="/Exercise"/>}


        const searchCourse =() => {
            setButton(true) ;
            Axios.post("http://localhost:3000/searchCourse1", {SearchPar: SearchPar});
        };

        const viewDetails =(id) => {
          setButton2(true) ;
          Axios.post("http://localhost:3000/viewDetails1", {viewID: id});
        };
        const viewExrecise =(name) => {
          setButton4(true) ;
          console.log(name);
          Axios.post("http://localhost:3000/getExercises", {name: name});
        };

        const updaterate = ()=>{
          Axios.put("http://localhost:3000/updateCourse",{
            Title:Title,
            newRate:rateco,
          });
        

        }

        const updaterateinst = ()=>{
          Axios.put("http://localhost:3000/updatee",{
            Email:Email,
            newRatee:rateins,
          });

          console.log(rateins)
          console.log(Email)
        }

     

      const filterPar =() => {
        setButton3(true) ;
    };


    

  return (

    <div className="viewCourse">
      <h1 className="header">Courses</h1>

      <input className="rana" type="text" placeholder="Search by title/subject/instructor" 
      onChange={(event)=>{
        setSearchPar(event.target.value);
      }
      }/>

      <button className='b2' onClick={searchCourse} > Search </button>

      <button className="b3" onClick={filterPar}> Filter Courses </button>
      

      { courseList.map((val,key)=>{ 
        return <div> <h2 className='h1'>  {val.Title} </h2>
        <h2 className='h2'> Total Hours:  {val.TotalHoursCourse}  &nbsp;&nbsp; 
        Rating: {val.Rating} &nbsp;&nbsp; Price: {val.Price} <br></br> <br></br>
         <button className='b1' onClick={()=>viewDetails(val._id)}> View details</button> </h2>
        <button onClick={()=>viewExrecise(val.Title)}>View Exercises</button>
        
        <h2>  ____________________________  </h2>
        </div> 
      }
      )
    }

<label for="courses">Choose a course to rate:</label>

<select onChange={(event)=>{
  titlechoosen(event.target.value);
}}>
   <option> Choose Course </option>
{CourseName.map((val,key)=>{
  return <option> {val.Title} </option>
})}
</select>


<input className="alaa" type="number" onChange={(event)=>{
  ratecourse(event.target.value);
}}></input> 

<button onClick={()=>updaterate()} classname = 'fh2' >submit</button>




<label for="Trainee">Choose a instructor to rate:</label>

    <select onChange={(event)=>{
      SetEmail(event.target.value);
    }}>
    <option> Choose a instructor </option>
    {traineename.map((val1,key)=>{
      return <option>{val1.Email}</option>
    })}
    </select>  

    <input className="alaa" type="number"  onChange={(event)=>{
      Rateinstructor(event.target.value);
    }}></input> 

    <button onClick={()=>updaterateinst()} classname = 'fh2' >submit</button>
    </div>
 
  );
   
}
export default ViewCourse;