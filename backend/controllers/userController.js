const asyncHandler = require("express-async-handler"); //to make it easy for handling exceptions inside of async express routes and passing them to your express error handlers.

const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

//@desc Register a new user
//@Route /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body; //destructing things to get from the user

  //Validation //making sure the user fill in the require fields which is the email and the name
  if (!name || !email) {
    res.status(400);

    throw new Error("Please fill in the require fields");
  }

  //   Find if user already exit
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already register");
  }

  //   Create user, using our User model from the models folder
  const user = await User.create({
    name,
    email,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
}); // setting a function for the register user from the route folder, to use aynchandler we need to wrap all our function inside it

//generateToken

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
};
