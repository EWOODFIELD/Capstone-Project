//myController.js handles the logic of the database management

let myDBServices = require('../Services/myDBServices')

// Event Details Table

//[APF 1.20 (Controller)] Find Event Details By Name
const findEventByName = async (req,res) =>{
    let data = await myDBServices.dbGetEventDetailByName(req,res)
    res.send(data)
}

//[APF 1.30 (Controller)] Find Event Details by ID
const findEventById = async (req,res) =>{
    let data = await myDBServices.dbGetEventDetailById(req,res)
    res.send(data)
}

//[APF 1.10 (Controller)] Find All Records from Event Details Table
const findEventDetails = async (req,res) =>{
    let data = await myDBServices.dbGetEventDetails(req,res)
    res.send(data)
}

//[APF 1.40 (Controller)] Delete Record from Event Details Table by Name
const deleteEventByName = async (req,res) =>{
    let data = await myDBServices.dbDeleteEventDetailbyName(req,res)
    res.send(data)
}

//[APF 1.50 (Controller)] Delete Record from Event Details Table by ID
const deleteEventById = async (req,res) =>{
    let data = await myDBServices.dbDeleteEventDetailById(req,res)
    res.send(data)
}

//[APF 1.60 (Controller)] Create Event in Event Details Table
const createEventDetail = async (req,res) =>{
    let data = await myDBServices.dbCreateEventDetail(req,res)
    res.send('successfully created new event details record')
}

//[APF 1.70 (Controller)] Update Event in Event Details Table
const updateEventDetail = async (req,res) =>{
    console.log("test 1.70 controller")
    let data = await myDBServices.dbUpdateEventDetailById(req,res)
    res.send(data)
}

//[APF 1.71 (Controller)] Update Event in Event Details Table
const updateEventDetailName = async (req,res) =>{
    console.log("test 1.71 controller")
    let data = await myDBServices.dbUpdateEventDetailByName(req,res)
    res.send(data)
}



// Event Placings Table

//[APF 1.80 (Controller)] Find All Records from Event Placings Table
const findEventPlacings = async (req,res) =>{
    let data = await myDBServices.dbGetEventPlacings(req,res)
    res.send(data)
}

//[APF 1.90 (Controller)] Find Deck Placing By Deck Name
const findDeckPlacingByName = async (req,res) =>{
    let data = await myDBServices.dbGetEventPlacingByName(req,res)
    res.send(data)
}

//[APF 2.00 (Controller)] Find Player Placing By Player Name
const findPlayerPlacingByName = async (req,res) =>{
    let data = await myDBServices.dbGetPlayerPlacingByName(req,res)
    res.send(data)
}

//[APF 2.10 (Controller)] Find Placing by Deck Name and Competition
const findPlacingByNameAndCompetition = async (req,res) =>{
    let data = await myDBServices.dbGetPlayerPlacingByNameAndCompetition(req,res)
    res.send(data)
}

//[APF 2.20 (Controller)] Find Placing by ID
const findEventPlacingById = async (req,res) =>{
    let data = await myDBServices.dbGetEventPlacingById(req,res)
    res.send(data)
}

//[APF 2.30 (Controller)] Delete Placing by Player Name and Competition
const deletePlacingByNameAndCompetition = async (req,res) =>{
    let data = await myDBServices.dbDeleteEventPlacingbyNameAndEvent(req,res)
    res.send(data)
}

//[APF 2.40 (Controller)] Delete Placing by ID
const deletePlacingById = async (req,res) =>{
    let data = await myDBServices.dbDeleteEventPlacingById(req,res)
    res.send(data)
}

//[APF 2.50 (Controller)] Create Placing in Event Placings Table
const createEventPlacing = async (req,res) =>{
    let data = await myDBServices.dbCreateEventPlacing(req,res)
    res.send('successfully created new event details record')
}

//[APF 2.60 (Controller)] Update Placing in Event Placings Table
const updateEventPlacing = async (req,res) =>{
    let data = await myDBServices.dbUpdateEventPlacingById(req,res)
    res.send(data)
}

// Event Summaries Table

//[APF 2.70 (Controller)] Find All Records from Event Summaries Table
const findEventSummaries = async (req,res) =>{
    let data = await myDBServices.dbGetEventSummaries(req,res)
    res.send(data)
}

//[APF 2.80 (Controller)] Find Event Summary by Event Name
const findEventSummaryByName = async (req,res) =>{
    let data = await myDBServices.dbGetEventSummaryByCompetition(req,res)
    res.send(data)
}

//[APF 2.90 (Controller)] Find Event Summaries by Deck Name
const findDeckSummaryByName = async (req,res) =>{
    let data = await myDBServices.dbGetEventSummariesByDeck(req,res)
    res.send(data)
}

//[APF 3.00 (Controller)] Find Summary by ID
const findEventSummaryById = async (req,res) =>{
    let data = await myDBServices.dbGetEventSummaryById(req,res)
    res.send(data)
}

//[APF 3.10 (Controller)] Delete Summary by ID
const deleteSummaryById = async (req,res) =>{
    let data = await myDBServices.dbDeleteEventSummaryById(req,res)
    res.send(data)
}

//[APF 3.20 (Controller)] Create Summary in Event Summaries Table
const createEventSummary = async (req,res) =>{
    let data = await myDBServices.dbCreateEventSummary(req,res)
    res.send('successfully created new event summary record')
}

//[APF 3.30 (Controller)] Update Summary in Event Summaries Table
const updateEventSummary = async (req,res) =>{
    let data = await myDBServices.dbUpdateEventSummaryById(req,res)
    res.send(data)
}

//[APF 2.70 (Controller)] Find All Records from Event Summaries Table
const findLeaders = async (req,res) =>{
    let data = await myDBServices.dbGetLeaders(req,res)
    res.send(data)
}

//[APF 2.70 (Controller)] Find All Records from Event Summaries Table
const findLeader = async (req,res) =>{
    let data = await myDBServices.dbGetLeader(req,res)
    res.send(data)
}

//[APF 2.70 (Controller)] Find All Records from Event Summaries Table
const findLeaderByName = async (req,res) =>{
    let data = await myDBServices.dbSearchLeaderByName(req,res)
    res.send(data)
}


module.exports={
//Event Details Exports
    findEventByName, findEventById, deleteEventByName, deleteEventById, 
    createEventDetail, updateEventDetail, findEventDetails, updateEventDetailName,
//Event Placing Exports
    findEventPlacings, findDeckPlacingByName, findPlayerPlacingByName,
    findEventPlacingById, findPlacingByNameAndCompetition, deletePlacingByNameAndCompetition, 
    deletePlacingById,createEventPlacing, updateEventPlacing, 
//Event Summary Exports
    findEventSummaries, findEventSummaryByName, findDeckSummaryByName,
    findEventSummaryById, deleteSummaryById, createEventSummary, updateEventSummary,

    findLeaders, findLeader, findLeaderByName
}

