const express = require("express"); //importing express
const router = express.Router(); //using express router

const {
  getEvents,
  getEvent,
} = require("../controllers/upcomingEventsController"); // bringing the function in from the controller

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/", getEvents); //we are setting a post request for the event route here, if a post request is sent this will be the result

router.get("/event/:id", getEvent); //we are setting a post request for a single events route here, if a post request is sent this will be the result

module.exports = router;
