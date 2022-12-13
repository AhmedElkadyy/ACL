
import './Subtitle.css'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";

function Subtitle() {

    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3000/ViewCourseK").then(function (response) {
            setCourseList(response.data);
        });
    }, []);

    return (
        <div className='subtitle'>
            <h1>SUBTITELS</h1>
            {courseList.map((val, key) => {
                const x = val.Subtitle;
                let i = 0
                return <div>{x.map((val1, key1) => {
                    i = i + 1
                    return <div>

                        <h1 className='h1-subtitle'>

                            {val1}

                        </h1>
                        <p className='p-subtitle'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/watch?v=Tzl0ELY_TiM">
                        </iframe>

                        <h2>  __________________  </h2>
                        <br></br>


                    </div>




                })}</div>

            })}




        </div>
    )
}
export default Subtitle;