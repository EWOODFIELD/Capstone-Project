//myDBServices defined functionalities handle the database updates 

// Functionality Test Results
    //Event Details [APF 1.10-1.70]
        //[APF 1.10 (Service}] Show All Records from table "Event-Details" -- Tested and working
        //[APF 1.20 (Service}] Filter Event Details table by Event Name -- Tested and working
        //[APF 1.30 (Service)] Filter Event Details table by Event ID -- Tested and working
        //[APF 1.40 (Service)] Delete Event Details by Name -- Tested and working
        //[APF 1.50 (Service)] Delete Event Details by ID -- Tested and working
        //[APF 1.60 (Service)] Create Event Details -- Tested and working
        //[APF 1.70 (Service)] Update Event Details By ID -- Tested and working

    //Event Placings
        //[APF 1.80] Show All Records from table "Event-Placings" -- Tested and working
        //[APF 1.90] Filter Event Placings Table by Deck Name -- Tested and working
        //[APF 2.00] Filter Event Placings Table by Player Name -- Tested and working
        //[APF 2.10] Filter Event Placings Table by Deck Name and Event -- Not working
        //[APF 2.20] (Service) Filter Event Placings table by Event ID -- Tested and working
        //[APF 2.30] (Service) Delete Event Placing by Player Name and Competition -- Not working
        //[APF 2.40 (Service)] Delete Event Placing by ID -- Tested and working
        //[APF 2.50 (Service)] Create Event Placing -- Tested and working
        //[APF 2.60 (Service)] Update Event Details By ID -- Tested and working

    //Event Summaries
        //[APF 2.70 (Service)] Show All Records from table "Event Summaries" -- Tested and working
        //[APF 2.80 (Service)] Filter Event Summaries table by Event -- Not working
        //[APF 2.90] Filter Event Summaries by Deck Name -- Not working
        //[APF 3.00] (Service) Filter Event Summaries table by ID -- Tested and working
        //[APF 3.10 (Service)] Delete Event Summary by ID -- Tested and working
        //[APF 3.20 (Service)] Create Event Summary -- Tested and working
        //[APF 3.30 (Service)] Update Event Summary By ID -- Tested and working

//Establishes connection between myDBServices.js file and index.js file
const sql = require("../index")

//[APF 1.10 (Service}] Show All Records from table "Event-Details"
let dbGetEventDetails = async (req,res) => { //Tested and working
    return new Promise((resolve, reject) => {
        let sqlQuery= `SELECT * FROM eventdetails`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            JSON.stringify(result)
        })
        console.log('testing competition details fetch function')
})}

//[APF 1.20 (Service}] Filter Event Details table by Event Name
let dbGetEventDetailByName = async (req,res) => { //Tested and working
    let name=req.params.name
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT Competition FROM eventdetails WHERE Competition like "%${name}%"`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            console.log(result)
        })
        
        console.log('testing competition name fetch function')
    })  
}

//[APF 1.30 (Service)] Filter Event Details table by Event ID
let dbGetEventDetailById = async (req,res) => { //Tested and working
    let eventId=req.params.id
    console.log(req.params)
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT * FROM eventdetails WHERE ID= ${eventId}`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        })
        console.log('testing competition ID fetch function')
    })
}

//[APF 1.40 (Service)] Delete Event Details by Name
let dbDeleteEventDetailbyName = async (req, res) =>{ //Tested and working
    let name=req.params.name
    return new Promise((resolve, reject) =>{
        let sqlQuery= `DELETE FROM eventdetails where Competition like "%${name}%"`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve((`successfully deleted ${name}`));
        })
        console.log('testing competition name deletion function')
    })
}

//[APF 1.50 (Service)] Delete Event Details by ID
let dbDeleteEventDetailById = async (req, res) =>{ //Tested and working
    let ID=req.params.ID
    return new Promise((resolve, reject) =>{
        let sqlQuery= `DELETE FROM eventdetails WHERE ID = ${ID}`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve((`successfully deleted competition number ${ID}`));
        })
    })
}

//[APF 1.60 (Service)] Create Event Details
let dbCreateEventDetail = async (req, res) =>{ //Tested and working
    let ID = req.body.ID
    let Competition = req.body.Competition
    let Players = req.body.Players
    let Rounds = req.body.Rounds
    let TopCut = req.body.TopCut
    let Organiser = req.body.Organiser
    let OrganiserURL = req.body.OrganiserURL
    return new Promise((resolve, reject) =>{
        let sqlQuery= `INSERT INTO eventdetails VALUES (${ID}, "${Competition}", ${Players}, ${Rounds}, "${TopCut}", "${Organiser}", "${OrganiserURL}")`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result), `Successfully updated competition number ${ID}'s information`); //Fix message later
        })
    })
}

//[APF 1.70 (Service)] Update Event Details By ID
let dbUpdateEventDetailById = async (req, res) => { //Tested and working
    console.log("test 1.70")
    let ID=req.params.ID
    let newName=req.body.Competition
    let newPlayers=req.body.Players
    let newRounds=req.body.Rounds
    let newTopCut=req.body.TopCut
    let newOrganiser = req.body.Organiser
    let newOrganiserURL = req.body.OrganiserURL
    return new Promise((resolve, reject) =>{
        let sqlQuery= `UPDATE eventdetails SET Competition = "${newName}", Players = ${newPlayers}, Rounds = ${newRounds}, TopCut = "${newTopCut}", Organiser = "${newOrganiser}", OrganiserURL = "${newOrganiserURL}" WHERE ID = ${ID}`; //ensure SQL command parameters match variable names defined in function
        sql.query(sqlQuery, (err,result, field) => {                                                                                        //NB: SQL database table column (pokeId) is configured as an integer, ${id}/${pokeId} should not have string quotation marks
            if(err) return reject(err);
            resolve(Object.values(result))
            console.log(`successfully updated Competition ${ID}'s information`); //Fix message later
        })
    })
}


// EVENT PLACINGS BEGINS HERE


//[APF 1.80] Show All Records from table "Event-Placings"
let dbGetEventPlacings = async (req,res) => { //Tested and Working
    return new Promise((resolve, reject) => {
        let sqlQuery= `SELECT * FROM eventplacings`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            JSON.stringify(result)
        })
        console.log('testing event placings fetch function')
})}

//[APF 1.90] Filter Event Placings Table by Deck Name
let dbGetEventPlacingByName = async (req,res) => { //Tested and working 
    let deck=req.params.deck                       //Can I return the event names associated with the placing results?
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT Placing FROM eventplacings WHERE Deck like "%${deck}%"`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            console.log(result)
        })
        
        console.log('testing deck placing fetch function')
    })  
}

//[APF 2.00] Filter Event Placings Table by Player Name
let dbGetPlayerPlacingByName = async (req,res) => { //Tested and working
    let name=req.params.name                        //Can I return the event names associated with the placing results?
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT Placing FROM eventplacings WHERE Name like "%${name}%"`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            console.log(result)
        })
        
        console.log('testing deck placing fetch function')
    })  
}

//[APF 2.10] Filter Event Placings Table by Deck Name and Event
let dbGetPlayerPlacingByNameAndCompetition = async (req,res) => { //Not working
    let deck=req.params.deck
    let competition=req.params.competition
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT Placing FROM eventplacings WHERE Name like "%${deck}%" , + Event like "%${competition}%"`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            console.log(result)
        })
        
        console.log('testing deck placing fetch function')
    })  
}

//[APF 2.20] (Service) Filter Event Placings table by Event ID
let dbGetEventPlacingById = async (req,res) => { //Not working
    let placingID=req.params.ID
    console.log(req.params)
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT * FROM eventplacings WHERE ID=${placingID}`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        })
        console.log('testing placing ID fetch function')
    })
}

//[APF 2.30] (Service) Delete Event Placing by Player Name and Competition
let dbDeleteEventPlacingbyNameAndEvent = async (req, res) =>{ //Not working
    let name=req.params.name
    let competition=req.params.competition
    return new Promise((resolve, reject) =>{
        let sqlQuery= `DELETE FROM eventplacings where Name like "%${name}%" , + Competition like "%${competition}%"`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve((`successfully deleted ${name}`));
        })
        console.log('testing competition name deletion function')
    })
}

//[APF 2.40 (Service)] Delete Event Placing by ID
let dbDeleteEventPlacingById = async (req, res) =>{ //Not working
    let ID=req.params.ID
    return new Promise((resolve, reject) =>{
        let sqlQuery= `DELETE FROM eventplacings WHERE ID = ${ID}`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve((`successfully deleted competition number ${ID}`));
        })
    })
}

//[APF 2.50 (Service)] Create Event Placing
let dbCreateEventPlacing = async (req, res) =>{ //Tested and working
    let ID = req.body.ID
    let Placing = req.body.Placing
    let Name = req.body.Name
    let Deck = req.body.Deck
    let Decklist = req.body.Decklist
    let Competition = req.body.Competition
    return new Promise((resolve, reject) =>{
        let sqlQuery= `INSERT INTO eventplacings VALUES (${ID}, "${Placing}", "${Name}", "${Deck}", "${Decklist}", "${Competition}")`; 
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result), `Successfully updated competition number ${ID}'s information`); //Fix message later
        })
    })
}

//[APF 2.60 (Service)] Update Event Details By ID
let dbUpdateEventPlacingById = async (req, res) => { //Tested and working
    let ID = req.body.ID
    let Placing = req.body.Placing
    let Name = req.body.Name
    let Deck = req.body.Deck
    let Decklist = req.body.Decklist
    let Competition = req.body.Competition
    return new Promise((resolve, reject) =>{
        let sqlQuery= `UPDATE eventplacings SET Placing = "${Placing}", Name = "${Name}", Deck = "${Deck}", Decklist = "${Decklist}", Competition = "${Competition}" WHERE ID = ${ID}`;
        sql.query(sqlQuery, (err,result, field) => {                                                                                      
            if(err) return reject(err);
            resolve(Object.values(result))
            console.log(`successfully updated Competition ${ID}'s information`); //Fix message later
        })
    })
}


// EVENT SUMMARIES BEGINS HERE

//[APF 2.70 (Service)] Show All Records from table "Event Summaries"
let dbGetEventSummaries = async (req,res) => { //Tested and working
    return new Promise((resolve, reject) => {
        let sqlQuery= `SELECT * FROM eventsummaries`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            JSON.stringify(result)
        })
        console.log('testing competition summaries fetch function')
})}

//[APF 2.80 (Service)] Filter Event Summaries table by Event
let dbGetEventSummaryByCompetition = async (req,res) => { //Not working
    let name=req.params.Competition
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT Competition FROM eventsummaries WHERE Competition like "%${name}%"`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            console.log(result)
        })
        
        console.log('testing summary name fetch function')
    })  
}

//[APF 2.90] Filter Event Summaries by Deck Name
let dbGetEventSummariesByDeck = async (req,res) => { //Not working
    let name=req.params.deck
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT TopCutRatio FROM eventsummaries WHERE Deck like "%${name}%"`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            console.log(result)
        })
        
        console.log('testing deck summary fetch function')
    })  
}

//[APF 3.00] (Service) Filter Event Summaries table by ID
let dbGetEventSummaryById = async (req,res) => { //Not working
    let ID=req.params.ID
    console.log(req.params)
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT * FROM eventsummaries WHERE ID= ${ID}`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        })
        console.log('testing summary ID fetch function')
    })
}

//[APF 3.10 (Service)] Delete Event Summary by ID
let dbDeleteEventSummaryById = async (req, res) =>{ //Not working
    let ID=req.params.ID
    return new Promise((resolve, reject) =>{
        let sqlQuery= `DELETE FROM eventsummaries WHERE ID = ${ID}`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve((`successfully deleted summary number ${ID}`));
        })
    })
}

//[APF 3.20 (Service)] Create Event Summary
let dbCreateEventSummary = async (req, res) =>{ //Tested and working
    let ID = req.body.ID
    let Competition = req.body.Competition
    let Deck = req.body.Deck
    let Quantity = req.body.Quantity
    let TopCutRatio = req.body.TopCutRatio
    
    return new Promise((resolve, reject) =>{
        let sqlQuery= `INSERT INTO eventsummaries VALUES (${ID}, "${Competition}", "${Deck}", 
        "${Quantity}", "${TopCutRatio}")`; 
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result), `Successfully created summary ${ID}`); //Fix message later
        })
    })
}

//[APF 3.30 (Service)] Update Event Summary By ID
let dbUpdateEventSummaryById = async (req, res) => { //Tested and working
    let ID = req.body.ID
    let Competition = req.body.Competition
    let Deck = req.body.Deck
    let Quantity = req.body.Quantity
    let TopCutRatio = req.body.TopCutRatio
    return new Promise((resolve, reject) =>{
        let sqlQuery= `UPDATE eventsummaries SET Competition = "${Competition}", Deck = "${Deck}", Quantity = "${Quantity}", TopCutRatio ="${TopCutRatio}" WHERE ID = ${ID}`;
        sql.query(sqlQuery, (err,result, field) => {                                                                                        
            if(err) return reject(err);
            resolve(Object.values(result))
            console.log(`successfully updated Summary ${ID}'s information`); //Fix message later
        })
    })
}


//[APF 3.40 (Service)] Show All Records from table "Leader Information"
let dbGetLeaders = async (req,res) => {
    return new Promise((resolve, reject) => {
        let sqlQuery= `SELECT * FROM leaderinformation`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            JSON.stringify(result)
        })
        console.log('testing leader fetch function')
})}



module.exports = {
//Event Details Exports
    dbGetEventDetailByName, dbGetEventDetailById, dbDeleteEventDetailbyName, dbDeleteEventDetailById, 
    dbCreateEventDetail, dbUpdateEventDetailById, dbGetEventDetails, 
//Event Placings Exports
    dbGetEventPlacings, dbGetEventPlacingByName, dbGetPlayerPlacingByName, dbGetPlayerPlacingByNameAndCompetition,
    dbGetEventPlacingById, dbDeleteEventPlacingbyNameAndEvent, dbDeleteEventPlacingById,dbCreateEventPlacing, 
    dbUpdateEventPlacingById, dbGetEventSummaries,
//Event Summaries Exports    
    dbGetEventSummaries, dbGetEventSummaryByCompetition, dbGetEventSummariesByDeck, dbGetEventSummaryById,
    dbDeleteEventSummaryById, dbCreateEventSummary, dbUpdateEventSummaryById,

    dbGetLeaders
    }