const express = require("express");

const router = express.Router();

const { addContactMessage } = require("../controllers/contactController");

router.post("/", addContactMessage);

module.exports = router;
