require("dotenv").config();
const db = require("./db/db");

const app = require("./app/app");

const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

// database connection url
db("mongodb://localhost:27017/course").then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening port is ${PORT}`);
  });
});
