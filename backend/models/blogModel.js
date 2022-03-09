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

    list1: {
      type: String,
    },

    list2: {
      type: String,
    },

    list3: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
