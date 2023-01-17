const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const corporateSchema = new Schema({

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
    ,
    CompanyName: {
        type: String,
        // required: true
    }

}, { timestamps: true });


const Corporate = mongoose.model('corporate', corporateSchema, "corporate");

module.exports = Corporate


// Path: server/Models/instructorModel.js
