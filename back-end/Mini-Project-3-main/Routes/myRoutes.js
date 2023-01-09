//myRoutes.js maps the endpoints of my application
// no logic is used, the routes pass data to the associated controller functions

//NB: Use http://localhost:3000/api-docs/ to call & test the following functionalities using Swagger
//NB: Use associated URL path for each route to call & test the following functionalities using Postman

var express = require('express');
var router = express.Router();
var myController = require('../Controllers/myController') 


//Event Details Table


//[APF 1.10 (Route)] Display All Event Details Table Records
router.get('/', function (req,res) { // tested: working ,  http://localhost:8080/dbscompdex/
    console.log('showing object')
    myController.findEventDetails(req,res)
    console.log('finished getting object data')
})

//[APF 1.20 (Route)] Search Event Details by Event Name
router.get('/finddetails/:name', (req,res) => { 
    myController.findEventByName(req,res)
})

//[APF 1.30 (Route)] Search Event Details by ID
router.get('/searchdetails/:id', (req,res) => { 
    myController.findEventById(req,res)
})

//[APF 1.40 (Route)] Delete Event Details by Event Name
router.delete('/deletedetails/:name', (req, res) => { 
    myController.deleteEventByName(req,res)
})

//[APF 1.50 (Route)] Delete Event Details by ID
router.delete('/deletedetail/:id', (req, res) => { 
    myController.deleteEventById(req,res)
})

//[APF 1.60 (Route)] Create Event Details
router.post('/createdetails', (req,res) => { 
    myController.createEventDetail(req,res)
})

//[APF 1.70 (Route)] Update Event Details by ID
router.put('/updatedetails/:ID', (req, res) => { //Note: Will not work through Postman without adding :id at end of route path
    console.log("sub form")
    myController.updateEventDetail(req,res)
})

//[APF 1.71 (Route)] Update Event Details by Competition Name
router.put('/updatendetails/', (req, res) => { //Note: Will not work through Postman without adding :name at end of route path
    myController.updateEventDetailName(req,res)
})


// Event Placings Table 


//[APF 1.80 (Route)] Display All Event Placings Table Records
router.get('/placings', function (req,res) {
    console.log('showing object')
    myController.findEventPlacings(req,res)
    console.log('finished getting object data')
})

//[APF 1.90 (Route)] Search Event Placings by Deck Name
router.get('/finddeckplacing/:deck', (req,res) => {
    myController.findDeckPlacingByName(req,res)  
})

//[APF 2.00 (Route)] Search Event Placings by Player Name
router.get('/findplayerplacing/:name', (req,res) => { 
    myController.findPlayerPlacingByName(req,res)
})

//[APF 2.10 (Route)] Search Event Placing by Deck Name and Event
router.get('/findspecificplacing/:name/:competition', (req,res) => { 
    myController.findPlayerPlacingByName(req,res)
})

//[APF 2.20 (Route)] Search Event Placing by ID
router.get('/findeventplacing/:ID', (req,res) => { 
    myController.findEventPlacingById(req,res)
})

//[APF 2.30 (Route)] Delete Event Placing by Player Name and Competition
router.delete('/deleteplacings/:name/:competition', (req, res) => { 
    myController.deletePlacingByNameAndCompetition(req,res)
})

//[APF 2.40 (Route)] Delete Event Placing by ID
router.delete('/deleteplacing/:ID', (req, res) => {
    myController.deletePlacingById(req,res)
})

//[APF 2.50 (Route)] Create Event Placing
router.post('/createplacing', (req,res) => { 
    myController.createEventPlacing(req,res)
})

//[APF 2.60 (Route)] Update Event Placing by ID
router.put('/updateplacing/:ID', (req, res) => { 
    myController.updateEventPlacing(req,res)
})


// Event Summaries Table 


//[APF 2.70 (Route)] Display All Event Summaries Table Records
router.get('/summaries', function (req,res) {
    console.log('showing object')
    myController.findEventSummaries(req,res)
    console.log('finished getting object data')
})

//[APF 2.80 (Route)] Search Event Summary by Event Name
router.get('/findsummary/:Competition', (req,res) => { 
    myController.findEventSummaryByName(req,res)
})

//[APF 2.90 (Route)] Search Event Summaries by Deck Name
router.get('/finddecksummaries/:deck', (req,res) => { 
    myController.findDeckSummaryByName(req,res)
})

//[APF 3.00 (Route)] Search Event Summary by ID
router.get('/finddecksummary/:ID', (req,res) => { 
    myController.findEventSummaryById(req,res)
})

//[APF 3.10 (Route)] Delete Event Summary by ID
router.delete('/deletesummary/:ID', (req, res) => {
    myController.deleteSummaryById(req,res)
})

//[APF 3.20 (Route)] Create Event Summary
router.post('/createsummary', (req,res) => { 
    myController.createEventSummary(req,res)
})

//[APF 3.30 (Route)] Update Event Summary by ID
router.put('/updatesummary/:ID', (req, res) => { 
    myController.updateEventSummary(req,res)
})


// Leader Information Table


//[APF 3.40 (Route)] Display All Leader Table Records
router.get('/leaderinfo', function (req,res) {
    console.log('showing object')
    myController.findLeaders(req,res)
    console.log('finished getting object data')
})

//[APF 3.50 (Route)] Display Leader via ID
router.post('/leaderinfo/:ID', function (req,res) {
    console.log('showing object')
    myController.findLeader(req,res)
    console.log('finished getting object data')
})

//[APF 3.50 (Route)] Display Leader via Name
router.post('/search/leaderinfo', function (req,res) {
    console.log('showing object')
    myController.findLeaderByName(req,res)
    console.log('finished getting object data')
})


module.exports = router;