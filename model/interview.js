const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const interviewSchema = new Schema({
    Date : {
        type : String,
        required : true
    },
    Time : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    Interviewer : {
        type : String,
        required : true
    },
    feedback : {
        type : String,
        required : true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    }
});
var INTERVIEW = mongoose.model('interview',interviewSchema)

module.exports = INTERVIEW 