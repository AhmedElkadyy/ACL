const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  
  Email: {
    type: String,
    // required: true
  }
  ,
  Pass: {
    type: String,
    // required: true
  }
 
}, { timestamps: true });

const Admin = mongoose.model('admin', adminSchema,"admin");

module.exports = Admin;