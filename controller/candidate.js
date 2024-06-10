var CANDIDATE = require('../model/candidate')

exports.CandidateCreate = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        let Create = await CANDIDATE.create(req.body)
        res.status(201).json({
            status : 'success',
            message : "Candidate create successfully",
            Create
        })
    } catch (error) {
        res.status(404).json({
            status : 'Fail',
            message : error.message
        })
    }
}
exports.CandidateAll = async function (req, res,next){
    try {
        let CandidateFind = await CANDIDATE.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status : 'success',
            message : "All Candidate Data Find Successfully ",
            CandidateFind
        })
    } catch (error) {
        res.status(404).json({
            status : 'Fail',
            message : error.message
        })
    }
}