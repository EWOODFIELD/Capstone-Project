//myController.js handles the logic of the database management

let userDBServices = require('../Services/userDBServices')

// Event Details Table

//[APF 1.20 (Controller)] Find Event Details By Name
const findUserByName = async (req,res) =>{
    let data = await userDBServices.dbGetUserByName(req,res)
    res.send(data)
}

//[APF 1.21 (Controller)] Find User Details by ID
const findUserById = async (req,res) =>{
    let data = await userDBServices.dbGetUserById(req,res)
    res.send(data)
}

//[APF 1.22 (Controller)] Find User Details by ID
const updateUserById = async (req,res) =>{
    let data = await userDBServices.dbUpdateUserById(req,res)
    res.send(data)
}

//[APF 1.20 (Controller)] Find Event Details By Name
const findUsers = async (req,res) =>{
    let data = await userDBServices.dbGetUsers(req,res)
    res.send(data)
}

//[APF 1.20 (Controller)] Find Event Details By Name
const login = async (req,res) =>{
    let data = await userDBServices.dbLogin(req,res)
    res.send(data)
}

//Create New User
const registration = async (req,res) => {
    let data = await userDBServices.dbRegistration(req,res)
    res.send(data)
}







module.exports={
//User Exports
 findUserByName,
 findUserById,
 updateUserById,
 login,
 registration,
 findUsers
}

