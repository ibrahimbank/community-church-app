const asyncHandler = require("express-async-handler");

const contact = require("../models/contactModel");

// @des create ticket note
// @route Post /api/contact
// @access Private

const addContactMessage = asyncHandler(async (req, res) => {
  const contactMessage = await contact.create({
    fullName: req.body.text,
    email: req.body.text,
    queryRelated: req.body.text,
    message: req.body.text,
  });

  res.status(200).json(contactMessage);
});

module.exports = {
  addContactMessage,
};
