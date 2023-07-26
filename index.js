require("dotenv").config();
const db = require("./db/db");

const app = require("./app/app");

const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

// database connection url
// you are not pass db url server is not started
const demoUrl = "mongodb://localhost:27017/course";
db(demoUrl).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening port is ${PORT}`);
  });
});


//* # npm run dev #  to start server port running