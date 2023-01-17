## Project Title

Coursera

## Motiviation 

The project itself aims to be a valuable resource for people looking to improve their skills and knowledge. It provides a convenient and accessible way for people to learn new things and achieve their goals through online courses and exercises. By offering the opportunity to practice and apply what they have learned, the project helps students not only learn new information, but also test their understanding and retain it for longer periods of time. The project strives to be the best it can be and continues to work towards this goal. 

## Build Status

->The project is currently in development.

->Unit tests will be added.


## Project Description

Course:

Advanced Computer Lab (CSEN 704/ DMET 706), Winter 2022

Theme:

Our project is an online learning platform that allows both individual and corporate trainees to enroll in a variety of courses and track their progress as they work towards earning a certificate of completion. The platform features a range of courses taught by experienced instructors who have created engaging lectures and quizzes to help students master the material. In addition to providing a convenient and flexible way for learners to gain new skills and knowledge, the platform also offers tools for instructors to manage their courses and for admins to track and address any issues that may arise, such as requests for refunds or reports of problems. Whether you're looking to advance your career, learn a new hobby, or simply expand your horizons, our platform is a great resource for anyone looking to learn and grow.

Overview:

Our project was developed using the Agile Methodology, which involves breaking the project into shorter time periods called "Sprints." Each Sprint has a specific set of goals, and at the end of each Sprint, a fully functional version of the project is delivered and evaluated based on the specified system requirements. This approach allows for a more flexible and responsive development process, as it allows for ongoing adjustments and improvements to be made based on feedback and changing needs.

Objectives:

->Gain an understanding of how to effectively utilize the Agile Methodology for project planning and software development   

->Learn the process of following a given set of System Requirements to develop a software

->Learn to research and master the use of the MERN Stack.

->Learn how to work together as a team on GitHub.




## Tech and Framework used 

->React

->Redux

->Node.js

->Express

->MongoDb

->Mongoose

->joi

->Material-Ui

->Stripe

->Git

->Github actions

->NodeMailer

->Postman

->VSCode

->JWT


## Features


Authentiation	    ✔️

Authorization	    ✔️

User Roles	       ✔️

Payments	       ✔️

User Email Notifications	✔️

User Password Reset	✔️

REST API	✔️

Validation using JOI	✔️
## Code style

-> Camel Case in variable names used
## LICENSE

This project is licensed under the Apache License 2.0. See the LICENSE file for details.
## Screenchots
## Configuration and Setup 

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine

->Open the project in your prefered code editor

->Go to terminal -> New terminal (If you are using VS code)

->Split your terminal into two (run the client on one terminal and the server on the other terminal)

In order to use  ES6 module in node.js:

-> cd server

-> find `package.json`

-> below `main` enter a new key-value pair called `type = module`

In the first terminal:


Backend:

cd server && npm start

Frontend:

cd source && npm start



## Environment Variables


PORT

MONGO_URI

TOKEN_KEY

HOST

USER

PASS

SERVICE

STRIPE_PRIVATE_KEY
## Code Example 
import './ShowCourses.css'

import Axios from 'axios';

import React, { useState, useEffect } from 'react';

import {Navigate} from "react-router-dom";

import Writenotes from '../Writenotes/Writenotes';

import Downloadcerticate from '../Downloadcertificate/Downloadcertificate';

import Sendcertificate from '../Sendcertificate/Sendcertificate';


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

                    <Writenotes/>
                    <Sendcertificate/>
                    


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
## Credits

->  Stackoverflow


