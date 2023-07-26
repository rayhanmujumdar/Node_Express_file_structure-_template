require("dotenv").config();
const express = require("express"); // import express
const app = express(); // call express function and create a app
const { notFoundError, errorHandler } = require("../error"); // import error handler
const middleware = require("../middleware"); // import middleware
const router = require('../router') // import router index.js

//middleware
app.use(middleware);

// Routing
app.use(router)

// global error handler -> should be used at the end of the file
app.use(notFoundError);
app.use(errorHandler);

module.exports = app;