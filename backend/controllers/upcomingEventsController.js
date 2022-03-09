const asyncHandler = require("express-async-handler"); //to make it easy for handling exceptions inside of async express routes and passing them to your express error handlers.

const upcomingEvents = require("../models/upcomingEventsModel");

//@desc Get event
//@Route /api/events/:id
// @access Public
const getEvents = asyncHandler(async (req, res) => {
  const events = await upcomingEvents.find({});

  res.status(200).json(events);
});

//@desc Get event
//@Route /api/events/:id
// @access Public

const getEvent = asyncHandler(async (req, res) => {
  const event = await upcomingEvents.findById(req.params.id);

  if (!event) {
    res.status(404);
    throw new Error("Blog Post not found");
  }

  res.status(200).json(event);
});

module.exports = {
  getEvents,
  getEvent,
};
