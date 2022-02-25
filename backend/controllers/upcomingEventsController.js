const asyncHandler = require("express-async-handler"); //to make it easy for handling exceptions inside of async express routes and passing them to your express error handlers.

const upcomingEvents = require("../models/upcomingEventsModel");

const list = asyncHandler(async (req, res) => {
  const users = await upcomingEvents.find();

  res.status(200).json(users);
});

module.exports = {
  list,
};
