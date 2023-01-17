const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  
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
  id: {
    type: String,
    // required: true
  }
  ,
  Rating: {
    type: String,
    // required: true
  }
  ,
  Bio: {
    type: String,
    // required: true
  }
  ,
  username: {
    type: String,
    // required: true
  }
  


 
}, { timestamps: true });

const instructor = mongoose.model('instructor', instructorSchema,"instructor");

module.exports = instructor;