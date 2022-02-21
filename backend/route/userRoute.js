const express = require("express"); //importing express
const router = express.Router(); //using express router

const { registerUser } = require("../controllers/userController"); // bringing the function in from the controller

router.post("/", registerUser); //we are setting a post request for the user route here, if a post request is sent this will be the result

module.exports = router;
