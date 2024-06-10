var express = require('express');
var interviewController = require('../controller/interview')
var userController = require('../controller/user')

var router = express.Router();

/* GET users listing. */
router.post('/create',userController.Secure,interviewController.interviewCreate)
router.get('/',userController.Secure,interviewController.InterviewAll)
router.patch('/:id',userController.Secure,interviewController.InterviewUpdate)


module.exports = router;
