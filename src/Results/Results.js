import './Results.css';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';



function Results() {

    const [courseList, setCourseList] = useState([])
    
      useEffect(() => {
        Axios.get("http://localhost:3000/searchResult1").then(function (response) {
            setCourseList(response.data);
        });
    }, []);
  return (
    <div className="results">
  <h1 className="viewCourseHeader">Courses</h1>
            {courseList.map((val, key) => {
                return <div>



                    <h2 className='viewCourseCourses1'> {val.Title}</h2>
                    
                 
                    
                    <p>{val.Description}</p>

                  


                   
                    <h2>  __________________  </h2>
                </div>
            }
            )
            }

            

      
    </div>
  );

}
export default Results; 