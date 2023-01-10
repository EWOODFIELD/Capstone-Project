//userDBServices defined functionalities handle the database updates 

// Functionality Test Results
    //User Details [APF 1.11-1.61]
        // [APF 1.11 (Service}] Handle User Login -- Tested and working
        // [APF 1.21 (Service}] Get All Users -- Tested and working
        // [APF 1.21 (Service}] Create new User -- Tested and working
        // [APF 1.31 (Service}] Create new User -- Tested and working
        // [APF 1.41 (Service}] Filter Users Table for User by Name -- Tested and working
        // [APF 1.51 (Service}] Filter Users Table for User by ID -- Tested and working
        // [APF 1.61 (Service)] Update User by ID -- Tested and working

//Establishes connection between userDBServices.js file and index.js file
const sql = require("../index")

// USER DETAILS BEGINS HERE

// [APF 1.11 (Service}] Handle User Login
let dbLogin = async (req,res) => {
    let username = req.body.username
    let password = req.body.password

    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT * FROM UserDetails WHERE UserName = "${username}"`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            if(password === result[0].UserPassword){
                resolve("Succesfully authenticated/ correct password matching with database password");
            } else {
                resolve("Password does not match");
            }
            
            console.log(result)
         })
    })

}

// [APF 1.21 (Service}] Get All Users
let dbGetUsers = async (req,res) => {
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT * FROM UserDetails`;
        sql.query(sqlQuery, (err,result, field) => {
            resolve(Object.values(result));
            JSON.stringify(result)
        })
        console.log('testing competition details fetch function')
    })
}

// [APF 1.31 (Service}] Create new User
let dbRegistration = async (req,res) => {
    let username = req.body.username
    let password = req.body.password

    return new Promise((resolve, reject) =>{
        let sqlQuery= `INSERT INTO UserDetails (Username, UserPassword) VALUES ("${username}", "${password}" )`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
                resolve("Registration Successful");
            }
        )
         })
}

// [APF 1.41 (Service}] Filter Users Table for User by Name
let dbGetUserByName = async (req,res) => {
    let UserName=req.params.UserName
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT UserName FROM UserDetails WHERE UserName like "%${UserName}%"`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            console.log(result)
        })
        
        console.log('testing competition name fetch function')
    })  
}

// [APF 1.51 (Service}] Filter Users Table for User by ID
let dbGetUserById = async (req,res) => {
    let User=req.params.ID
    return new Promise((resolve, reject) =>{
        let sqlQuery= `SELECT * FROM userdetails WHERE ID= ${User}`;
        sql.query(sqlQuery, (err,result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
            console.log(result)
        })
        
        console.log('testing competition name fetch function')
    })  
}

//[APF 1.61 (Service)] Update User by ID
let dbUpdateUserById = async (req, res) => {
    let id=req.params.ID
    let newUserName=req.body.UserName
    let newUserPassword=req.body.UserPassword
    
    return new Promise((resolve, reject) =>{
        let sqlQuery= `UPDATE userdetails SET UserName = "${newUserName}", UserPassword = "${newUserPassword}" WHERE ID = ${id}`;  
        sql.query(sqlQuery, (err,result, field) => {                                                                                      
            if(err) return reject(err);
            resolve(Object.values(result))
            console.log(newUserName, newUserPassword); //Fix message later
        })
    })
}

module.exports = {
//User Exports
dbGetUserByName,
dbGetUserById,
dbUpdateUserById,
dbLogin,
dbRegistration,
dbGetUsers
}