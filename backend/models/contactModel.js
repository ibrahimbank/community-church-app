const mongoose = require("mongoose");

const contactShema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please fill in your full name"],
  },

  email: {
    type: String,
    required: [true, "Please fill in your email"],
  },

  queryRelated: {
    type: String,
    required: [true, "Please fill in the query related"],
  },

  message: {
    type: String,
    required: [true, "Please fill in your message"],
  },
});

module.exports = mongoose.model("contact", contactShema);
