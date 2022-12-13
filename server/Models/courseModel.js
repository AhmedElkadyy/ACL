const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  
    Id: {
        type: Number,
        // required: true
      },
  Title: {
    type: String,
    // required: true
  }
  ,
  Subject: {
    type: String,
    // required: true
  }
  ,
  Subtitle: {
    type: Array,
    // required: true
  },
  Price: {
    type: Number ,
    // required: true
  }
  ,
  Summary: {
    type: String,
    // required: true
  } ,
  Exercies: {
    type: Array,
    // required: true
  }
  ,
  TotalHoursSubtitels: {
    type: Number,
    // required: true
  } ,
  TotalHoursCourse: {
    type: Number,
    // required: true
  } ,
  Discount: {
    type: Number,
    // required: true
  } ,
  Rating: {
    type: Number,
    // required: true
  },
  
  Instructor: {
    type: String,
    // required: true
  },
  
  InstructorId: {
    type: String,
    // required: true
  },

  YoutubeLink: {
    type: String,
    // required: true
  },

  Description: {
    type: String,
    // required: true
  }

 
}, { timestamps: true });

const course = mongoose.model('course', courseSchema,"course");

module.exports = course