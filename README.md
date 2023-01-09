# Capstone-Project Submission (09.01.23)
  - Final project submission for Institute of Data (IOD) Software Development Bootcamp (19.12.22-9.01.23)

Project Name: DBSCompDex
  - The purpose of this project is to provide a centralised historical index of competitive events and related information for players, collectors, 
    and e-commerce tcg businesses to review and interact with.

This project is to provide what plants can be used for the public and for professionals.

Back End Environment:
  - Project back end is running on NodeJS, and communicating with MySQL.
  - MVC structure controls calls to/from the front end to the database, or from back end to database in the case of Postman testing.
  - Functionalities APF 1.10 - 3.60 outlined and tested in myDBServices.js.
  

Back End Run Procedure:
  - In the project directory:
    - npm start (opens on port 8080).
    - note: This project is not yet set up for remote use on other machines. You will need MySQL installed and the requisite database files to 
      run this project without any issues.
      
  - If you do not have the following scripts installed you will need to install them using:
    - Axios: This controls the database calls used by the project, install using npm install axios.
    - Express: NodeJS framework that allows for requiring between back end files, install using npm install express.
    - MySQL: MySQL relational database system protocol allows the project to call from and send data to the project database, install using npm install mysql.
    - Nodemon: Script for automatically restarting back end server when modifications are made, install using npm install nodemon.
    - Redis: Caching script allowing for faster application usage once data has been called (not current, planned for future use), install using npm install redis.
    - Swagger UI Express: Script allowing for API/data functionality testing via browser (http://localhost:8080/api-docs/#/), install using npm install swagger-ui-express.
  
