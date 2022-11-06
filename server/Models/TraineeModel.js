const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const traineeSchema = new Schema({
  
  Email: {
    type: String,
    unique: 'That username is already taken'
    // required: true
  }
  ,
  Pass: {
    type: String,
    // required: true
  }
 
}, { timestamps: true });

const trainee = mongoose.model('trainee', traineeSchema,"trainee");

module.exports = trainee