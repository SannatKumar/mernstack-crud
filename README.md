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











