//General Database Operation Update Flow:
  //1. database management request sent
  //2. request reaches route (i.e. endpoint) 
  //3. route flows to relevant controller function
  //4. controller function calls associated DBservices function for database update

let express = require("express")
let application = express()
let swaggerUi = require("swagger-ui-express") //http://localhost:8080/api-docs/ , http://localhost:3000/api-docs/#/Update%20Service to call Swagger document
swaggerDocument = require('./swagger.json'); 
application.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));


// Add mySQL into project (npm install mysql) 
const mysql = require('mysql');
const dbConfig = require('./config/mydb.config.js');

let port1 = 8080

let cors = require("cors")  //stops browser error (npm install cors)
application.use(cors())

application.use(express.json());// to access body from postman

//Establishes Connection to MySQL Application
var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;

//Routing & webserver starts here. Establishes that index.js requires the "routes" folder to run
let myRoutes = require('./Routes/myRoutes')
let userRoutes = require('./Routes/userRoutes')

application.use('/dbscompdex',myRoutes)
application.use('/dbsuserdex', userRoutes)

application.listen(port1,()=>{console.log(`Server running on http://localhost:${port1}`)})

