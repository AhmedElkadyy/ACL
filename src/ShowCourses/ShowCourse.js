import './ShowCourses.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Navigate} from "react-router-dom";


function ShowCourses() {

    const [Instructor, setInstructor] = useState('');

    const [ButtonReviews, setButtonReviews] = useState(false);
    const [courseList, setCourseList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3000/ViewCourseK", { Instructor: Instructor }).then(function (response) {
            setCourseList(response.data);
        });
    }, []);
    if (ButtonReviews){
        return <Navigate  to="/Reviews"/>
  
    }

    return (



        <div className="App">

            <label>insert your name:</label>
            <input type="text" onChange={(event) => { setInstructor(event.target.value) }}></input>


            <h1 className="viewCourseHeader">Courses</h1>
            {courseList.map((val, key) => {
                return <div>



                    <h2 className='viewCourseCourses1'> {val.Title}</h2>
                    
                    <h2 className='viewCourseCourses2'>  {val.Subtitle} </h2>
                    
                    <p>{val.Description}</p>

                    <iframe width="420" height="315" src={val.YoutubeLink}>
                    </iframe>


                    <h2 className='viewCourseCourses2'>
                        Rating: {val.Rating} &nbsp;&nbsp;
                        <button className='viewCourseCoursesB'   onClick={()=>{setButtonReviews(true)}}> Open Reviews</button>




                    </h2>
                    <h2>  __________________  </h2>
                </div>
            }
            )
            }

        </div>
    );
}

export default ShowCourses;