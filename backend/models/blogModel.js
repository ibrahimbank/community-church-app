const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    subHeading: {
      type: String,
      required: [true, "Please add a subHeading"],
    },

    heading: {
      type: String,
      required: [true, "Please add an heading"],
    },

    description: {
      type: String,
      required: [true, "Please add an description"],
    },

    autor: {
      type: String,
      required: [true, "Please add an autor"],
    },

    date: {
      type: String,
      required: [true, "Please add an date"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
