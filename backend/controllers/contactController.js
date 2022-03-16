const asyncHandler = require("express-async-handler");

const contact = require("../models/contactModel");

// @des create ticket note
// @route Post /api/contact
// @access Private

const addContactMessage = asyncHandler(async (req, res) => {
  const { fullName, email, queryRelated, message } = req.body;

  if (!fullName || !email || !queryRelated || !message) {
    res.status(400);
    throw new Error("Please the required field");
  }
  const contactMessage = await contact.create({
    fullName,
    email,
    queryRelated,
    message,
  });
  res.status(201).json(contactMessage);
});

module.exports = {
  addContactMessage,
};
