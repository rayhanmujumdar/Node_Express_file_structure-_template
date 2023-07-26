const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const responseTime = require('response-time')

// using all middleware one array
const middleware = [cors(), morgan("dev"), express.json(),responseTime()];

module.exports = middleware;
