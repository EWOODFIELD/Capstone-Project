//myRoutes.js maps the endpoints of my application
// no logic is used, the routes pass data to the associated controller functions

//NB: Use http://localhost:3000/api-docs/ to call & test the following functionalities using Swagger
//NB: Use associated URL path for each route to call & test the following functionalities using Postman

var express = require('express');
var router = express.Router();
var userController = require('../Controllers/userController') 


//Event Details Table

// //[APF 1.10 (Route)] Display All Event Details Table Records
// router.get('/', function (req,res) { // tested: working ,  http://localhost:8080/dbscompdex/
//     console.log('showing object')
//     myController.findEventDetails(req,res)
//     console.log('finished getting object data')
// })

//[APF 1.21 (Route)] Search User Records by Name
router.get('/finduser/:UserName', (req,res) => { 
    userController.findUserByName(req,res)
})

//[APF 1.22 (Route)] Search User Records by ID
router.get('/finduserbyid/:ID', (req,res) => { 
    userController.findUserById(req,res)
})

//[APF 1.23 (Route)] Update User via ID
router.put('/updateuserbyid/:ID', (req,res) => { 
    userController.updateUserById(req,res)
})

//[APF 1.21 (Route)] Search User Records by Name
router.get('/findusers', (req,res) => { 
    userController.findUsers(req,res)
})

//[APF 1.21 (Route)] Search User Records by Name
router.get('/login', (req,res) => { 
    userController.login(req,res)
})

//[APF 1.23 (Route)] Register New User
router.post('/register', (req,res) => {
    userController.registration(req,res)
})




//[APF 1.30 (Route)] Search Event Details by ID
// router.get('/searchdetails/:id', (req,res) => { 
//     myController.findEventById(req,res)
// })

//[APF 1.40 (Route)] Delete User by Name
// router.delete('/deletedetails/:name', (req, res) => { 
//     myController.deleteEventByName(req,res)
// })

// //[APF 1.50 (Route)] Delete User by ID
// router.delete('/deletedetail/:id', (req, res) => { 
//     myController.deleteEventById(req,res)
// })

// //[APF 1.60 (Route)] Create User in User Details
// router.post('/createdetails', (req,res) => { 
//     myController.createEventDetail(req,res)
// })

// //[APF 1.70 (Route)] Update Event Details by ID
// router.put('/updatedetails/:ID', (req, res) => { 
//     myController.updateEventDetail(req,res)
// })





module.exports = router;