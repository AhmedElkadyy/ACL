import './ShowCourses.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Navigate} from "react-router-dom";


function ShowCourses() {

    const [Instructor, setInstructor] = useState('');

    const [ButtonReviews, setButtonReviews] = useState(false);

    const [ButtonSubtitles, setButtonSubtitels] = useState(false);
    const [courseList, setCourseList] = useState([])

    
    useEffect(() => {
        Axios.get("http://localhost:3000/ViewCourseR", { Instructor: Instructor  }).then(function (response) {
            setCourseList(response.data);
        });
    }, []);
    if (ButtonReviews){
        return <Navigate  to="/Reviews"/>
  
    }
    if (ButtonSubtitles){
        return <Navigate  to="/Subtitles"/>

    }

    return (



        <div className="App">


            <label>insert your name:</label>
            <input type="text" onChange={(event) => { setInstructor(event.target.value) }}></input>


            <h1 className="viewCourseHeader">Courses</h1>
            <br></br>
            {courseList.map((val, key) => {
                return <div>



                    <h2 className='viewCourseCourses1'> {val.Title}</h2>
                    <br></br>
                    
                <button className='subtittle'   onClick={()=>{setButtonSubtitels(true)}}>View Subtitles </button>

                <br></br>
                <br></br>

                    
                    <p className='Description'>{val.Description}</p>

                    <br></br>

                    <iframe width="420" height="315" src={val.YoutubeLink}>
                    </iframe>


                    <h2 className='viewCourseCourses2'>
                        Rating: {val.Rating} &nbsp;&nbsp;
                        <button className='viewCourseCoursesB'   onClick={()=>{setButtonReviews(true)}}> Open Reviews</button>

                 




                    </h2>
                    <h2>  __________________  </h2>

                    <br></br>
                </div>
            }
            )
            }

        </div>
    );
}

export default ShowCourses;