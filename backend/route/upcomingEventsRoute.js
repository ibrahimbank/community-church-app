const express = require("express"); //importing express
const router = express.Router(); //using express router

const { list } = require("../controllers/upcomingEventsController"); // bringing the function in from the controller

router.get("/", list); //we are setting a post request for the Registeruser route here, if a post request is sent this will be the result

module.exports = router;
