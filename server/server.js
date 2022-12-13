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


    app.get("/ShowMyCourses",function(req,res){
        var Title= req.body.Title;
        var Subject= req.body.Subject;
        var Instructor= req.body.Instructor;
        if ((Title!== null) && (Subject== null) && (Instructor==null)){
            var query= Course.find({Title:Title });
            query.exec(function(err,result){
                var array = [];
                for ( var i=0; i<result.length;i++){
                    res.json(result[i]);
                    //console.log(result[i].Price);
                
                
        }});
        }
        else if (Title== null && Subject!== null && Instructor==null){
            var query = Course.find({Subject:Subject});
            query.exec(function(err,result){
                var array = [];
                for (var i=0; i<result.length;i++){
                    res.json(result[i]);
                    //console.log(result[i].Price);
                
                
        }});
    
        }
        else {
         //var Instructor= req.body.Instructor;
        var query = Course.find({Instructor:Instructor});
        query.exec(function(err,result){
            var array = [];
            for (var i=0; i<result.length;i++){
                res.json(result[i]);
                //console.log(result[i].Price);
            
            
    }});
    
        }
        
    
    
    });

  
    
    app.get("/ViewCourseR", (req, res) => {

        Course.find(({}),function(err,val){
    
          if(err){
              res.send("error")
          }
          else{
          res.send(val)
          }
        })
      });



    app.get("/ViewCourseK",  (req, res) => {

 
        const  Instructor = req.body.Instructor
        
    
     
        
        Course.find(({Instructor:Instructor}),
        function(err,val){
    
    
      
        
           
             res.send(val)
           
      

             
      
        })
      
        });

        app.get ("/filterCourse", async(req, res) => {
            var subject = req.params.Subject;
            var Rating = req.params.Rating;
            var price = req.params.Price;
            var result = []
            if (subject == "empty" && Rating == "empty" && price == "empty"){
                result = await Course.find({})
            } 
            else 
    
            if (subject == "empty" && price == "empty") {
            result = await Course.find({Rating:Rating})
            }
    
            else if (Rating == "empty" && price == "empty") {
                result =await Course.find({Subject:subject})
            }
            else if (Rating == "empty" && subject == "empty") {
                result =await Course.find({Price:price})
            }
            else if (subject = "empty") {
            result = await Course.find({Rating:Rating , Price:price})
            }
            else if (Rating == "empty"){
            result = await Course.find({Subject:subject , Price:price})
            }
            else if (price == "empty"){
            result = await Course.find({Rating:Rating , Subject:subject})
            }
            else{
            result = await Course.find({Subject:subject , Rating:Rating , Price:price})
            }
            res.status(200).json(result);
            });
    

            var searchPar;


            app.post("/searchCourse1", (req, res) => {
                searchPar=req.body.SearchPar;
                console.log((searchPar))
              });
        
              app.get("/searchResult1",(req, res) => {
               

                Course.find(({$or:[{Title:searchPar},{Subject:searchPar},{Instructor:searchPar}]}),function(err,val){
            
                  if(err){
                      res.send("error")
                  }
                  else{
                     res.send(val)
                  }
                })
            })

   



            var searchPar1;
            var viewID;
            
                app.get("/viewCourse", (req, res) => {
            
                    Course.find(({}),function(err,val){
                
                      if(err){
                          res.send("error")
                      }
                      else{
                      res.send(val)
                      }
                    })
                  });
            
                  app.post("/searchCourse", (req, res) => {
                    searchPar1=req.body.searchPar;
                  });
            
                  app.get("/searchResult",(req, res) => {
            
                    Course.find(({$or:[{Title:searchPar1},{Subject:searchPar1},{Instructor:searchPar1}]}),function(err,val){
                
                      if(err){
                          res.send("error")
                      }
                      else{
                         res.send(val)
                      }
                    })
            
            
                });
            
            
                app.post("/viewDetails1", (req, res) => {
                  viewID=req.body.viewID;
                 
                });
            
                app.get("/viewDetails", (req, res) => {
            
                  Course.find(({_id:viewID}),function(err,val){
              
                    if(err){
                        res.send("error")
                    }
                    else{
                    res.send(val)
                    }
                  })
                });

                app.get("/read",async (req, res)=>{
                    Course.find({},(err,result)=>{
                      if(err){
                        res.send(err);
                      }
                      res.send(result);
                    })
                  
                  
                  
                  });
                  app.put("/update",async (req, res)=>{
                    const newQuestion=req.body.Question;
                    const newAnswer=req.body.Answer;
                    const NewWrong1=req.body.Wrong1;
                    const NewWrong2=req.body.Wrong2;
                    const NewWrong3=req.body.Wrong3;
                    const CourseName=req.body.CourseName;
                    const Exrecise=newQuestion+"="+newAnswer+""+NewWrong1+""+NewWrong2+"*"+NewWrong3;
                    console.log(Exrecise);
                    var myquery = { Title: CourseName };
                    var newvalues = { $push: { "Exercies": Exrecise } };
                    Course.updateOne(myquery, newvalues, function(err, res) {
                      if (err) throw err;
                      console.log("1 document updated");
                    }); 
                  })

               

var priceL;
var priceH;
var ratingL;
var ratingH;
var subject;
var name;


                  app.post("/filterR", (req, res) => {
                    priceL=req.body.priceL;
                    priceH=req.body.priceH;
                    ratingL=req.body.ratingL;
                    ratingH=req.body.ratingH;
                    subject=req.body.subject;
                   
                  });
              
                  app.get("/filterResultR", (req, res) => {
                    if(subject!=''){
                      Course.find(({Price:{$lte:priceH,$gte:priceL},Rating:{$lte:ratingH,$gte:ratingL},Subject:subject}),function(err,val){
                  
                        if(err){
                            res.send("error")
                        }
                        else{
                        res.send(val)
                        }
                      })
                    } else{
                      Course.find(({Price:{$lte:priceH,$gte:priceL},Rating:{$lte:ratingH,$gte:ratingL}}),function(err,val){
                  
                        if(err){
                            res.send("error")
                        }
                        else{
                        res.send(val)
                        }
                      })
                    }
                    
                   
                  });

                  app.put("/updateCourse",async(req,res)=>{
                    const newRate= req.body.newRate;
                    const Title= req.body.Title;
                  var myquery = { Title: Title };
                  var newvalues = { $set: { "Rating": newRate } };
                  Course.updateOne(myquery, newvalues, function(err, res) {
                  if (err) throw err;
                  })
                });
              
                app.put("/updatee",async(req,res)=>{
                  const newRate= req.body.newRatee;
                  const Email= req.body.Email;
                  console.log(Email);
                  console.log(newRate);
              
              
                var myquery = { Email: Email };
                var newvalues = { $set: { "Rating": newRate } };
                Instructor.updateOne(myquery, newvalues, function(err, res) {
                if (err) throw err;
                });
                });
              
                app.get("/readcourses",async(req,res)=>{
                  Course.find({},(err, result)=>{
                    if(err){
                      res.send(err);
                    }
                    res.send(result);
                  });
                });
              
                app.get("/readinstructor",async(req,res)=>{
                  Instructor.find({},(err, result)=>{
                    if(err){
                      res.send(err);
                    }
                    res.send(result);
                  });
                });
              
                  app.get("/filterResultR", (req, res) => {
                    if(subject!=''){
                      Course.find(({Price:{$lte:priceH,$gte:priceL},Rating:{$lte:ratingH,$gte:ratingL},Subject:subject}),function(err,val){
                  
                        if(err){
                            res.send("error")
                        }
                        else{
                        res.send(val)
                        }
                      })
                    } else{
                      Course.find(({Price:{$lte:priceH,$gte:priceL},Rating:{$lte:ratingH,$gte:ratingL}}),function(err,val){
                  
                        if(err){
                            res.send("error")
                        }
                        else{
                        res.send(val)
                        }
                      })
                    }
                    
                   
                  });
              
                  app.post("/getExercises",async (req, res)=>{
                    name=req.body.name;
                    console.log(name);
                    });
              
                  app.get("/readExercises",async (req, res)=>{
                    Course.find({Title: name},(err,result)=>{
                      if(err){
                        res.send(err);
                      }
                      res.send(result);
                    })});
              
              
              
                  
              
              
              
              