// External variables
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')
const alert = require('alert');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY = 'secretkey112233';
const localStorage = require('localStorage');
const nodemailer = require('nodemailer');





const MongoURI = "mongodb+srv://kady:AaBbCc112233@cluster0.ytbnyxa.mongodb.net/?retryWrites=true&w=majority";


//App variables
const app = express();
const port = "3000";


const bodyParser = require('body-parser');
const Admin = require("./Models/adminModel");
const Instructor = require("./Models/instructorModel");
const Trainee = require("./Models/TraineeModel");
const Course = require("./Models/courseModel");
const User = require("./Models/userModel");
const Coporate = require("./Models/coporateModel");
const { findOne, findOneAndDelete } = require("./Models/adminModel");


app.use(cors())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



// #Importing the userController

var login = false;
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
    

            var SearchPar;


            app.post("/searchCourse1", (req, res) => {
                SearchPar=req.body.SearchPar;
                console.log((SearchPar))
              });
        
              app.get("/searchResult1",(req, res) => {
               

                Course.find(({$or:[{Title:SearchPar},{Subject:SearchPar},{Instructor:SearchPar}]}),function(err,val){
            
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
                    searchPar1=req.body.SearchPar;
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










                    // Authentication and Authorization Middleware


                    const createToken = (user) => {
                      return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
                          expiresIn: 86400, // expires in 24 hours
                        });
                    };

                    app.post("/login", (req, res) => {
                      const Email = req.body.Email;
                      const Password = req.body.Password;
                      User.findOne
                      ({
                        Email: Email
                      }, function (err, user) {
                        if (err) {
                          res.send(err
                          );
                        }
                        else {
                          if (user) {
                            if (user.Password == Password) {
                              alert("Login successful");
                             
                              login=true;
                    
                       
                              
                              const token = jwt.sign({Email
                              :user.Email}, SECRET_KEY, {
                                expiresIn: 86400 // expires in 24 hours
                                })
                                console.log(token)
                                res.send(token)

                                

                                localStorage.setItem('token', token);
                                localStorage.setItem('Email', user.Email);
                                localStorage.setItem ('Password', user.Password);

                  ;
                                console.log(localStorage.getItem('token'))
                                console.log(localStorage.getItem('Email'))
                                console.log(localStorage.getItem('Password'));

                                

                               
                                
                        
                    
                              
                    
                    
                    
                            }
                            else {
                              alert("Incorrect password");
                              res.send("Incorrect password");
                            }
                          }
                          else {
                            alert("User not found");
                            res.send("User not found");
                          }
                    
                        }
                      });
                    });
                    


                    app.post("/loginAdmin", (req, res) => {
                      const Email = req.body.Email;
                      const Password = req.body.Password;
                      Admin.findOne
                      ({
                        Email: Email
                      }, function (err, user) {
                        if (err) {
                          res.send(err
                          );
                        }
                        else {
                          if (user) {
                            if (user.Password == Password) {
                              alert("Login successful");
                             
                              login=true;
                    
                       
                              
                              const token = jwt.sign({Email
                              :user.Email}, SECRET_KEY, {
                                expiresIn: 86400 // expires in 24 hours
                                })
                                console.log(token)
                                res.send(token)

                                

                                localStorage.setItem('token', token);
                                localStorage.setItem('Email', user.Email);
                                localStorage.setItem ('Password', user.Password);
                                localStorage.setItem ('ID', user._id);  

                  ;
                                console.log(localStorage.getItem('token'))
                                console.log(localStorage.getItem('Email'))
                                console.log(localStorage.getItem('Password'));
                                console.log(localStorage.getItem('ID'));


                                

                               
                                
                        
                    
                              
                    
                    
                    
                            }
                            else {
                              alert("Incorrect password");
                              res.send("Incorrect password");
                            }
                          }
                          else {
                            alert("User not found");
                            res.send("User not found");
                          }
                    
                        }
                      });
                    });

                    app.post("/loginInstructor", (req, res) => {
                      const Email = req.body.Email;
                      const Password = req.body.Password;
                      Instructor.findOne
                      ({
                        Email: Email
                      }, function (err, user) {
                        if (err) {
                          res.send(err
                          );
                        }
                        else {
                          if (user) {
                            if (user.Password == Password) {
                              alert("Login successful");

                              login=true;


                              const token = jwt.sign({Email
                              :user.Email}, SECRET_KEY, {
                                expiresIn: 86400 // expires in 24 hours
                                })
                                console.log(token)
                                res.send(token)


                                localStorage.setItem('token', token);
                                localStorage.setItem('Email', user.Email);
                                localStorage.setItem
                                ('Password', user.Password);
                                localStorage.setItem ('ID', user._id);  

                                console.log(localStorage.getItem('token'))
                                console.log(localStorage.getItem('Email'))
                                console.log(localStorage.getItem('Password'));
                                console.log(localStorage.getItem('ID'));


                            }
                            else {
                              alert("Incorrect password");
                              res.send("Incorrect password");
                            }
                          }
                          else {
                            alert("User not found");
                            res.send("User not found");
                          }

                        }
                      });
                    });

                    app.post("/loginTrainee", (req, res) => {
                      const Email = req.body.Email;
                      const Password = req.body.Password;
                      Trainee.findOne
                      ({
                        Email: Email
                      }, function (err, user) {
                        if (err) {
                          res.send(err
                          );
                        }
                        else {
                          if (user) {
                            if (user.Password == Password) {
                              alert("Login successful");
                             
                              login=true;
                    
                       
                              
                              const token = jwt.sign({Email
                              :user.Email}, SECRET_KEY, {
                                expiresIn: 86400 // expires in 24 hours
                                })
                                console.log(token)
                                res.send(token)

                                

                                localStorage.setItem('token', token);
                                localStorage.setItem('Email', user.Email);
                                localStorage.setItem ('Password', user.Password);
                                localStorage.setItem ('ID', user._id);
                                

                  ;
                                console.log(localStorage.getItem('token'))
                                console.log(localStorage.getItem('Email'))
                                console.log(localStorage.getItem('Password'));
                                console.log(localStorage.getItem('ID'));

                                

                               
                                
                        
                    
                              
                    
                    
                    
                            }
                            else {
                              alert("Incorrect password");
                              res.send("Incorrect password");
                            }
                          }
                          else {
                            alert("User not found");
                            res.send("User not found");
                          }
                    
                        }
                      });
                    });
                    

                    app.post("/loginCoporate", (req, res) => {
                      const Email = req.body.Email;
                      const Password = req.body.Password;
                      Coporate.findOne
                      ({
                        Email: Email
                      }, function (err, user) {
                        if (err) {
                          res.send(err
                          );
                        }
                        else {
                          if (user) {
                            if (user.Password == Password) {
                              alert("Login successful");

                              login=true;


                              const token = jwt.sign({Email
                              :user.Email}, SECRET_KEY, {
                                expiresIn: 86400 // expires in 24 hours
                                })
                                console.log(token)
                                res.send(token)



                                localStorage.setItem('token', token);
                                localStorage.setItem('Email', user.Email);
                                localStorage.setItem
                                ('Password', user.Password);
                                localStorage.setItem ('ID', user._id);

                                console.log(localStorage.getItem('token'))
                                console.log(localStorage.getItem('Email'))
                                console.log(localStorage.getItem('Password'));

                                console.log(localStorage.getItem('ID'));


                            }
                            else {
                              alert("Incorrect password");
                              res.send("Incorrect password");
                            }
                          }
                          else {

                            alert("User not found");
                            res.send("User not found");
                          }

                        }
                      });
                    });






                    




                    function verifyToken(req, res, next) {
                      const bearerHeader = req.headers['authorization'];
                      if (typeof bearerHeader !== 'undefined') {
                        const bearer = bearerHeader.split(' ');
                        const bearerToken = bearer[1];
                        req.token = bearerToken;
                        next();
                      } else {
                        res.sendStatus(403);
                      }
                    }
                    
                    app.get('/api', verifyToken, (req, res) => {
                      jwt.verify(req.token, SECRET_KEY, (err, authData) => {
                        if (err) {
                          res.sendStatus(403);
                        } else {
                          res.json({
                            message: 'Post created...',
                            authData
                          });
                        }
                      });
                    }
                    );
                    








        

                    app.post("/signup", (req, res) => {
                   
                      const username = req.body.username;
                      const Email = req.body.email;
                      const Password = req.body.password;
                      

                      const user = new User({
                        username: username,
                        Email: Email,
                        Password: Password,

                      });

                      
                      user.save(function (err) {
                        if (err) {
                          res.send(err);
                        }
                        else {
                          console.log(localStorage.getItem('token'))
                          alert ("User registered");
                          res.send("User registered");

                        }
                      }
                      );
                    });


                    app.post("/signupAdmin", (req, res) => {
                   
                      const username = req.body.username;
                      const Email = req.body.email;
                      const Password = req.body.password;

                      const user = new Admin({
                        username: username,
                        Email: Email,
                        Password: Password,

                      });

                      const user2 = new User({
                        username: username,
                        Email: Email,
                        Password: Password,

                      });



                      user.save(function (err) {
                        if (err) {
                          res.send(err);

                        }
                        else {

                          alert("User registered");
                          res.send("User registered");

                        }

                      }
                      );


                      user2.save(function (err) {
                        if (err) {
                          res.send(err);

                        }
                        else {

                         
                          res.send("User registered");

                        }

                      }





                      );
                    });





                    app.post("/signupInstructor", (req, res) => {
                      const username = req.body.username;
                      const Email = req.body.email;
                      const Password = req.body.password;

                      const user = new Instructor({
                        username: username,
                        Email: Email,
                        Password: Password,

                      });

                      const user2 = new User({
                        username: username,
                        Email: Email,
                        Password: Password,

                      });



                      user.save(function (err) {
                        if (err) {
                          res.send(err);

                        }
                        else {

                          alert("User registered");
                          res.send("User registered");

                        }

                      }
                      );


                      user2.save(function (err) {
                        if (err) {
                          res.send(err);

                        }
                        else {

                         
                          res.send("User registered");

                        }

                      }





                      );
                    });




                    app.post("/signupTrainee", (req, res) => {

                      const username = req.body.username;
                      const Email = req.body.email;
                      const Password = req.body.password;

                      const user = new Trainee({
                        username: username,
                        Email: Email,
                        Password: Password,

                      });

                      const user2 = new User({
                        username: username,
                        Email: Email,
                        Password: Password,

                      });



                      user.save(function (err) {
                        if (err) {
                          res.send(err);

                        }
                        else {

                          alert("User registered");
                          res.send("User registered");

                        }

                      }
                      );


                      user2.save(function (err) {
                        if (err) {
                          res.send(err);

                        }
                        else {

                         
                          res.send("User registered");

                        }

                      }





                      );
                    });




                    app.post("/signupCoporate", (req, res) => {

                      const username = req.body.username;
                      const Email = req.body.email;
                      const Password = req.body.password;

                      const user = new Coporate({
                        username: username,
                        Email: Email,
                        Password: Password,

                      });

                      const user2 = new User({
                        username: username,
                        Email: Email,
                        Password: Password,

                      });



                      user.save(function (err) {
                        if (err) {
                          res.send(err);

                        }
                        else {

                          alert("User registered");
                          res.send("User registered");

                        }

                      }
                      );


                      user2.save(function (err) {
                        if (err) {
                          res.send(err);

                        }
                        else {

                         
                          res.send("User registered");

                        }

                      }





                      );
                    });









                    // app.post("logout", (req, res) => {
                    //   localStorage.removeItem('token');
                    //   localStorage.removeItem('Email');
                    //   localStorage.removeItem('Password');


                    //   console.log(localStorage.getItem('token'))
                    //   console.log('logged out'  );
                    //   res.send("logged out");
                    // }
                    // );


                 app.get  ('/logout', (req, res) => {
                      localStorage.removeItem('token');
                      localStorage.removeItem('Email');
                      localStorage.removeItem('Password');
                      localStorage.removeItem('ID');

                      console.log(localStorage.getItem('token'))
                      console.log('logged out'  );
                      res.send("logged out");
                    }
                    );



                    // app.post("updateMyProfile", (req, res) => { 
                    //   const mail = req.body.email;
                    //   const bio = req.body.bio;
                    //   console.log('a7a');

                    //   Instructor.findOneandUpdate({_id: localStorage.getItem('ID')}, {Email: mail, Bio: bio}, function(err, user) {
                    //     if (err) {
                    //       res.send(err);
                    //       console.log(err);
                    //     }
                    //     else {
                    //       alert("Updated");
                    //       res.send("Updated");
                    //     }
                    //   }
                    //   );
                    // }

                    // );

                    app.post("/updateMyProfile", (req, res) => {

                      const mail = req.body.email;

                      const password = req.body.password;

                      const bio = req.body.bio;

                      
                      

                      Instructor.findOneAndUpdate({ _id: localStorage.getItem('ID') }, { Email: mail,Password:password, Bio: bio }, function (err, user) {

                        if (err) {
                          res.send(err);
                          console.log(err);
                        }
                        else {
                          alert("Updated");
                          res.send("Updated");
                        }
                      }
                      );
                    }

                    );



                      

//                     app.post('sendEmail', (req, res) => {
                      
//                    const  email = req.body.email;

//                    console.log('kadyyy');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'ahmedelkadyy21@gmail.com',
//     pass: 'ykidngjdhxyqtleg'
//   }
// });

// var mailOptions = {
//   from: 'ahmedelkadyy21@gmail.com',
//   to: email,
//   subject: 'Change Password',
// html: '<h1>Welcome</h1><p>That was easy!</p>'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     alert('Email sent: ' + info.response);
//     console.log('Email sent: ' + info.response);
//   }
// });

//                     }
//                     );

app.post("/sendEmail", (req, res) => {

  const email = req.body.email;

  console.log('kadyyy');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:'ahmedelkadyy21@gmail.com',
      pass:'ykidngjdhxyqtleg'
    }

  });

  var mailOptions = {
    from: 'ahmedelkadyy21@gmail.com',
    to: email,
    subject: 'Change Password',

    html: '<p>Your verfication code is 8257</p>'
  };

  transporter.sendMail(mailOptions, function (error, info) {

    if (error) {
      console.log(error);
    } else {
      alert('Email sent: ' );
      console.log('Email sent: ' + info.response);
    }
  }
  );

}
);


app.post("/checkCode", (req, res) => {

  
  const code = req.body.code;

  if (code == '8257') {
    alert('Code is correct');
    res.send('Code is correct');
    
  }
  else {

    alert('Code is incorrect');
    res.send('Code is incorrect');
  }
}
);

app.post("/changePassword", (req, res) => {

  const password = req.body.password;
  const email = req.body.email;

 

    User.findOneAndUpdate({ Email
      : email }, { Password: password }, function (err, user) {
  
        if (err) {
          res
  
  
            .
            send
            (err);
          console.log(err);
        }
        else {
          alert("Password changed");
          res.send("Updated");
        }
      }
      )
      ;
      
}
);




  

 




 const loggeedIn = false;

app.get("loggedIn", (req, res) => {

  console.log(localStorage.getItem('token'));

  if (localStorage.getItem('token') == null) {
    loggeedIn = false;
    console.log(loggeedIn);
    res.send(loggeedIn);
  }
  else {
    loggeedIn = true;
    res.send(loggeedIn);
  }


}

);






                    

                



              
                    

                          




                      
                      


                    



              
              
              
                  
              
              
              
              