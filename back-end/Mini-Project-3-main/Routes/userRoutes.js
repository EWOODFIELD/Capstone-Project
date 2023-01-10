//userRoutes.js maps the endpoints of my application
// no logic is used, the routes pass data to the associated controller functions

//NB: Use http://localhost:8080/api-docs/ to call & test the following functionalities using Swagger
//NB: Use associated URL path for each route to call & test the following functionalities using Postman

var express = require('express');
var router = express.Router();
var userController = require('../Controllers/userController') 


//User Details Table

// [APF 1.41 (Service}] Filter Users Table for User by Name
router.get('/finduser/:UserName', (req,res) => { 
    userController.findUserByName(req,res)
})

// [APF 1.51 (Service}] Filter Users Table for User by ID
router.get('/finduserbyid/:ID', (req,res) => { 
    userController.findUserById(req,res)
})

//[APF 1.61 (Service)] Update User by ID
router.put('/updateuserbyid/:ID', (req,res) => { 
    userController.updateUserById(req,res)
})

// [APF 1.21 (Service}] Get All Users
router.get('/findusers', (req,res) => { 
    userController.findUsers(req,res)
})

// [APF 1.11 (Service}] Handle User Login
router.get('/login', (req,res) => { 
    userController.login(req,res)
})

// [APF 1.31 (Service}] Create new User
router.post('/register', (req,res) => {
    userController.registration(req,res)
})


module.exports = router;