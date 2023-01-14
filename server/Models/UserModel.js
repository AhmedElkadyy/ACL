const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: {
    type: String,
    required: false,
  },
  Email: {
    type: String,
    required:  false
  },
  Age: {
    type: Number,
    required: false,
  },
  BornIn: {
    type: String,
    required: false
  },
  LivesIn: {
    type: String,
    required: false
  },
  MartialStatus: {
    type: String,
    required: false
  },
  PhoneNumber: {
    type: String,
    required: false
  },
  Job: {
    type: String,
    required: false

  },
   Password: {
     type: String,
     required: false
   }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;