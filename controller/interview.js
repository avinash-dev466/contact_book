let INTERVIEW = require('../model/interview')

exports.interviewCreate = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        let Create = await INTERVIEW.create(req.body)
        res.status(201).json({
            status : 'success',
            message : "Interview created successfully",
            Create
        })
    } catch (error) {
        res.status(404).json({
            status : 'Fail',
            message : error.message
        })
    }
}

exports.InterviewAll = async function(req, res, next) {
    try {
        let InterviewFind = await INTERVIEW.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status : 'success',
            message : "Interview All successfully",
            InterviewFind
        })
    } catch (error) {
        res.status(404).json({
            status : 'Fail',
            message : error.message
        })
    }   
}

exports.InterviewUpdate = async function(req, res, next) {
    try {
        let InterviewUpdate = await INTERVIEW.findByIdAndUpdate(req.params.id)
        res.status(201).json({
            status : 'success',
            message : "Interview Update successfully",
            InterviewUpdate
        })
    } catch (error) {
        res.status(404).json({
            status : 'Fail',
            message : error.message
        })
    }
}