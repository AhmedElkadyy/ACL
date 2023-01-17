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

<img width="1440" alt="Screenshot 2023-01-17 at 9 37 20 PM" src="https://user-images.githubusercontent.com/83039370/213018788-71f887bf-60e1-4c40-b614-aabfd6a0e38e.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 35 04 PM" src="https://user-images.githubusercontent.com/83039370/213018794-7f9e3f2c-45ea-44ee-b0f2-7ed752190b1c.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 35 14 PM" src="https://user-images.githubusercontent.com/83039370/213018823-0d27521d-ffa1-4bf8-97f6-d8165193221c.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 37 03 PM" src="https://user-images.githubusercontent.com/83039370/213018852-9a65f3ad-3886-4a2f-8dda-9067e5d70a7c.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 36 58 PM" src="https://user-images.githubusercontent.com/83039370/213018854-2d098e39-4f1b-4ae8-90c9-a9302f3af640.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 39 02 PM" src="https://user-images.githubusercontent.com/83039370/213018855-748c45e1-f32e-4aa7-8e96-e2b1ef1c6777.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 36 41 PM" src="https://user-images.githubusercontent.com/83039370/213018858-0697c2db-844e-4a21-ba36-045123da550a.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 38 59 PM" src="https://user-images.githubusercontent.com/83039370/213018880-85e87fa1-8ef5-49a0-b373-56e7ab038757.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 36 25 PM" src="https://user-images.githubusercontent.com/83039370/213018881-bf0a6346-0864-43b6-bbd9-c8118d9057a7.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 38 38 PM" src="https://user-images.githubusercontent.com/83039370/213018906-2b20ce70-3fdd-4ae7-8948-0fc6aca80628.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 36 08 PM" src="https://user-images.githubusercontent.com/83039370/213018908-784ab1ac-16f1-4c65-adaf-ffca9fbbed4d.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 37 56 PM" src="https://user-images.githubusercontent.com/83039370/213018936-31d05ee5-f736-4bf5-860f-692b213693d8.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 36 03 PM" src="https://user-images.githubusercontent.com/83039370/213018938-dd2b628e-ed76-4b3f-81ed-808715bf47b4.png">
<img width="1440" alt="Screenshot 2023-01-17 at 9 37 33 PM" src="https://user-images.githubusercontent.com/83039370/213018965-b487c673-37da-4fe1-8f5e-96181f8f3ae9.png">

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


