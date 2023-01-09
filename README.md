# Capstone-Project Submission (09.01.23)
  - Final project submission for Institute of Data (IOD) Software Development Bootcamp (19.12.22-9.01.23)

Project Name: 
  - DBSCompDex

Project Purpose:
  - The purpose of this project is to provide a centralised historical index of competitive events and related information for players, collectors, 
    and e-commerce tcg businesses to review and interact with.

Back End Environment:
  - Project back end is running on NodeJS, and communicating with MySQL to provide information for project front end (see project architecture diagram PD 1.0 
    outlined in Capstone Project Overview Document).
  - Database structure outlined in Capstone Project Overview Document item PD 1.1.
  - MVC structure controls calls to/from the front end to the database, or from back end to database in the case of Postman testing.
  - Functionalities APF 1.10 - 3.60 outlined and tested in myDBServices.js (note: Not all provisioned functionalities are currently required or working).
  
Back End Run Procedure:
  - In the project directory:
    - npm start (opens on port 8080).
    - note: This project is not yet set up for remote use on other machines. You will need MySQL installed and the requisite database files to 
      run this project without any issues.
      
  - If you do not have the following scripts installed you will need to install them using:
    - Axios: 
        This controls the database calls used by the project, install using npm install axios.
    - Express: 
        NodeJS framework that allows for requiring between back end files, install using npm install express.
    - MySQL: 
        MySQL relational database system protocol allows the project to call from and send data to the project database, install using npm install mysql.
    - Nodemon: 
        Script for automatically restarting back end server when modifications are made, install using npm install nodemon.
    - Redis: 
        Caching script allowing for faster application usage once data has been called (not current, planned for future use), install using npm install redis.
    - Swagger UI Express: 
        Script allowing for API/data functionality testing via browser (http://localhost:8080/api-docs/#/), install using npm install swagger-ui-express.

Front End Environment:
  - Project front end is running on React JS, and communicating with MySQL database via project back end environment (see project architecture diagram PD 1.0 
    outlined in Capstone Project Overview Document).

Front End Run Procedure:
  - In the source directory:
  - npm start (opens on port 3000).
  - note: This project is not yet set up for remote use on other machines. You will need MySQL installed and the requisite database files to 
    run this project without any issues.

- If you do not have the following scripts installed you will need to install them using:
    - Axios: 
        Already outlined, install using npm install axios.
    - Material UI (material, react, styled): 
        Code component library controlling front end user interface, styling, and behaviour , install using npm install @mui/material @emotion/react @emotion/styled.
    - Material UI Icons: 
        Code component icon library, install using npm install @mui/icons-material.
    - React Router Dom: 
        Implements dynamic routing for project web application, install using npm install react-router-dom.
    - Swagger UI Express: 
        Script allowing for API/data functionality testing via browser (http://localhost:8080/api-docs/#/), install using npm install swagger-ui-express.

Test Provisioning:
  - Refer Swagger JSON Document ((http://localhost:8080/api-docs/#/) for functionality testing (most unused functionalities not yet added as are not within 
    current state project scope, earmarked for future state development).
 

  
