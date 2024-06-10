const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const candidateSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phoneNo : {
        type : String,
        required : true
    },
    ResumeUrl : {
        type : String,
        required : true
    },
    skills : {
        type : String,
        required : true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    }
});
var CANDIDATE = mongoose.model('candidate',candidateSchema)

module.exports = CANDIDATE 