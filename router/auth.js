const router = require("express").Router();
//import controller for auth
const { authController } = require("../controller/auth");

// for example: how to use separate routing controller
router.get("/user", authController);

// auth router are export
module.exports = router