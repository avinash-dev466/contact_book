var express = require('express');
var userController = require('../controller/user')
var router = express.Router();

/* GET users listing. */
router.post('/create',userController.UserCreate)
router.post('/Login',userController.UserLogin)
router.get('/',userController.Secure,userController.AllUserData)
router.get('/:id',userController.Secure,userController.SingleUser)
router.delete('/:id',userController.Secure,userController.UserDelete)
router.patch('/:id',userController.Secure,userController.UserUpdate)

module.exports = router;
