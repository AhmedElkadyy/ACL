const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const traineeSchema = new Schema({
  
  Email: {
    type: String,
   
    // required: true
  }
  ,
  Password: {
    type: String,
    // required: true
  }
  ,
  username: {
    type: String,
    // required: true
  }
  ,
  id: {
    type: String,
    // required: true
  }
   

 
}, { timestamps: true });

const trainee = mongoose.model('trainee', traineeSchema,"trainee");

module.exports = trainee