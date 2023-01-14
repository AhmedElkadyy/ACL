import "./Results.css"
import { Navigate } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import Axios from 'axios';

function Results() {

    const [courseList, setCourseList] = useState ([])
    const [button, setButton] = useState (false)

    useEffect(() => {
        Axios.get("http://localhost:3000/searchResult1").then(function (response) {
          setCourseList(response.data);
        });
      },[] );

      if (button){
        return <Navigate  to="/viewDetails"/>}

      const viewDetails =(id) => {
        setButton(true) ;
        Axios.post("http://localhost:3000/viewDetails1", {viewID: id});
      };

    return (

        <div className="searchCourse">
          <h1 className="SCheader">Search Result:</h1>

          { courseList.map((val,key)=>{
        return <div> <h2 className='SCh1'>  {val.Title} </h2>
        <h2 className='SCh2'> Total Hours: {val.TotalHoursCourse} &nbsp;&nbsp; 
        Rating: {val.Rating} &nbsp;&nbsp; Price: {val.Price} &nbsp;&nbsp;
         <button className='SCb1' onClick={()=>viewDetails(val._id)} > View details</button> </h2>
         <h2>  __________  </h2>
        </div>
      }
      )
    }

          </div>

          )
 
   
}
export default Results;