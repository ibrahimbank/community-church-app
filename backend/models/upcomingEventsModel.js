const mongoose = require("mongoose");

const upcomingEventsSchema = mongoose.Schema({
  date: {
    type: Number,
    required: [true, "Please add a date"],
  },

  month: {
    type: String,
    required: [true, "Please add an email"],
  },

  heading: {
    type: String,
    required: [true, "Please add a heading"],
    default: false,
  },

  description: {
    type: String,
    required: [true, "Please add an description"],
    default: false,
  },

  time: {
    type: String,
    required: [true, "Please add a time"],
    default: false,
  },

  time2: {
    type: String,
    required: [true, "Please add a time2"],
    default: false,
  },

  location: {
    type: String,
    required: [true, "Please add a location"],
    default: false,
  },
});

module.exports = mongoose.model("upcomingEvents", upcomingEventsSchema);
