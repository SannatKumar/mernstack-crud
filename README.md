# Development Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Description

This is a MERN stack web application. 

MERN stands for:

MongoDB: A document-oriented database program based on NoSQL.

Express: It's a robust Node.js web application framework that helps in creating powerful REST APIs.

React: A JavaScript library used to create beautiful and interactive user interfaces developed by Facebook and the community of individual developers.

Node: It’s a JavaScript runtime environment built on Google Chrome’s V8 engine, and it compiles js at the runtime.


The project starts with command

$ npx create-react-app mernstack-myapp    "mernstack-myapp" is the folder and application name.


After the app has been created the unnecessary files such as report vitals, logo and icons were deleted and their definition and requirement was also removed from the importing files.

Install react bootstrap.

$ npm install react-bootstrap bootstrap

And import the bootstrap file in the src/app.js.

The Components folder is created with three components each for the task of creating, editing and listing the student records.

Instal React Router Dom

$ npm install react-router-dom --save

App.js updated with Bootstrap imports like Nav, Navbar, Row, Column, Switch, Route, Link and components file imported and defined for the use.

Routes path are defined inside switch as to which component to redirect.

In the creating Student section Setting up functions, state and, defining the onsubmit and use in forms are included.

This is some front end for now.

# Backend Part

A directory named backend is created to keep everything related to backend in same folder.

Inside backend folder,

$ npm init

This command create a package.json file for the backend part of the application.

Next,
$ npm install mongoose express cors body-parser

This command install the Node dependencies for the MERN stack backend.

Express: It’s a robust Node.js web application framework that helps in creating powerful REST APIs.

MongoDb: It’s a NoSQL document-oriented database for creating a robust web application.

CORS: It’s a node.js package helps in enabling Access-Control-Allow-Origin CORS header.

bodParser: This package extracts the entire body portion of an incoming request stream and exposes it on req.body.


Install the Nodemon

$ npm install nodemon --save

This command install the nodemon dependency to automate the server restarting process.


# Setting up MongoDB Database

Create a database folder inside backend folder we created earlier.
create a db.js file inside database folder.
Locally it doesn't require username and password.

# Mongodb command for general purposes

$ mongo

Takes to the moongo terminal

$ show dbs

List all the databases

$ use <databasename>

Enters into the particular database(<databasename>)

$ show collections

Shows all the collection

$ db.collectionName.find()

Shows all the content of the collection.

# Mongoose Schema

MongoDb Schema is used for interacting with mongoDB database.

This we have done here creating a folder name Models inside backend folder.

Inside Models folder,

Student.js(Schema) file is created and name, email and roll no fields along with their respective data types is declared.

# Routes 

Route folder is created inside backend to define routes for GET, POST, PUT DELETE method.

# Server.js file

Server.js file is created inside backend folder.

Server.js file includes all the necessary imports such as express, mongoose, cors, bodyParser and, dbconfig file.
The database connectiona and the ports are also defined here.

# Created API

REST API	URL
GET	http://localhost:4000/students
POST	/students/create-student
GET	/students/edit-student/id
PUT	/students/update-student/id
DELETE	/students/delete-student/id

# Http-Errors

$ npm install http-errors --save

This command install the http errors package to use in the server file.

# Using Axios to make HTTP requests

Axios is a promise-based Http client for the browser and node.js. It is installed insise the mernstack-myapp folder.

Axios features

Make XMLHttpRequests from the browser
Handle http requests from node.js
Supports the Promise API
Intercept request and response
Transform request and response data
Cancel requests
Self-regulating for JSON data
Client-side protection from XSRF

Installation Command

$ npm install axios

Use axios post method to send student's data to the mongoDB server.

<header className ="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-student.component"} className = "nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav>
              <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav>
              
              <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav>

            </Nav>
          </Container>
        </Navbar>
      </header>















