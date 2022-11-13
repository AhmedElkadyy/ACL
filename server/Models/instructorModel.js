const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  
  Email: {
    type: String,
    // required: true
  }
  ,
  Pass: {
    type: String,
    // required: true
  }

  ,
  Id: {
    type: String,
    // required: true
  }

 
}, { timestamps: true });

const instructor = mongoose.model('instructor', instructorSchema,"instructor");

module.exports = instructor;