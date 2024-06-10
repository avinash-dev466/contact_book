var express = require('express');
var candidateController = require('../controller/candidate')
var userController = require('../controller/user')
var router = express.Router();

/* GET users listing. */
router.post('/create',userController.Secure,candidateController.CandidateCreate)
router.get('/',userController.Secure,candidateController.CandidateAll)

module.exports = router;
