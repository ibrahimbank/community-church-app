const express = require("express"); //importing express
const router = express.Router(); //using express router

const { registerUser } = require("../controllers/userController"); // bringing the function in from the controller

const { contactRoute } = require("./contactRoute");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.post("/", registerUser); //we are setting a post request for the Registeruser route here, if a post request is sent this will be the result

module.exports = router;
