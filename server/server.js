// External variables
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')
const alert = require('alert');



const MongoURI = "mongodb+srv://kady:AaBbCc112233@cluster0.ytbnyxa.mongodb.net/?retryWrites=true&w=majority";


//App variables
const app = express();
const port = "3000";


const bodyParser = require('body-parser');
const Admin = require("./Models/adminModel");
const Instructor = require("./Models/instructorModel");
const Trainee = require("./Models/TraineeModel");
const Course = require("./Models/courseModel")


app.use(cors())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



// #Importing the userController


// configurations
// Mongo DB
mongoose.connect(MongoURI)
    .then(() => {
        console.log("MongoDB is now connected!")


        // Starting server
        app.listen(port, () => {
            console.log(`Listening to requests on http://localhost:${port}`);
        })
    })
    .catch(err => console.log(err));
/*
                Start of your code
*/
app.post("/insertAdmin", async (req, res) => {
    const email = req.body.Email
    const pass = req.body.Pass




    if (await Admin.findOne({ Email: email })) {

        alert('USERNAME TAKEN !!!');

    }

    else {
        const admin = new Admin({ Email: email, Pass: pass })
        await admin.save()
        console.log("Admin inserted")
    }



});

app.post("/insertInstructor", async (req, res) => {
    const email = req.body.Email
    const pass = req.body.Pass




    if (await Instructor.findOne({ Email: email })) {

        alert('USERNAME TAKEN !!!');

    }

    else {
        const instructor = new Instructor({ Email: email, Pass: pass })
        await instructor.save()
        console.log("instructor inserted")
    }

});

app.post("/insertTrainee", async (req, res) => {
    const email = req.body.Email
    const pass = req.body.Pass




    if (await Trainee.findOne({ Email: email })) {

        alert('USERNAME TAKEN !!!');

    }

    else {
        const trainee = new Trainee({ Email: email, Pass: pass })
        await trainee.save()
        console.log("trainee inserted")
    }

});

app.post("/insertCourse", async (req, res) => {
    const Title = req.body.Title
    const Subtitle = req.body.Subtitle
    const Price = req.body.Price 
    const  Summary = req.body.Summary

    const course = new Course({ Title: Title, Subtitle: Subtitle , Price: Price , Summary : Summary })
    await course.save()
    console.log("Course inserted")

    








});

app.post("/searchCourse", async (req, res) => {

 
    const  Instructor = req.body.Instructor
    const Search = req.body.Search
    const Result = req.body.Result


   
    
    console.log(JSON.stringify(Instructor))
    console.log(JSON.stringify(Result))
    Course.find(({Instructor:Instructor,Title:Result}),
    function(err,val){


  
    
        console.log(JSON.stringify(val))
        console.log("Result here")
        return res.send(val)
       
  
   
     
  
      
  
    })
  
    });





// #Routing to userController here




/*
                                                    End of your code
*/
