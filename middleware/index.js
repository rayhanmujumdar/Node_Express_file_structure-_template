const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

// using all middleware one array
const middleware = [cors(), morgan("dev"), express.json()];

module.exports = middleware;
