//userController.js handles the logic of the database management

let userDBServices = require('../Services/userDBServices')

// User Details Table

// [APF 1.41 (Service}] Filter Users Table for User by Name
const findUserByName = async (req,res) =>{
    let data = await userDBServices.dbGetUserByName(req,res)
    res.send(data)
}

// [APF 1.51 (Service}] Filter Users Table for User by ID
const findUserById = async (req,res) =>{
    let data = await userDBServices.dbGetUserById(req,res)
    res.send(data)
}

//[APF 1.61 (Service)] Update User by ID
const updateUserById = async (req,res) =>{
    let data = await userDBServices.dbUpdateUserById(req,res)
    res.send(data)
}

//[APF 1.20 (Controller)] Find Event Details By Name
const findUsers = async (req,res) =>{
    let data = await userDBServices.dbGetUsers(req,res)
    res.send(data)
}

// [APF 1.11 (Service}] Handle User Login
const login = async (req,res) =>{
    let data = await userDBServices.dbLogin(req,res)
    res.send(data)
}

// [APF 1.31 (Service}] Create new User
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

