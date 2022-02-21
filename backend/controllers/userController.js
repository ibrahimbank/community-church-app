const asyncHandler = require("express-async-handler"); //to make it easy for handling exceptions inside of async express routes and passing them to your express error handlers.

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

  res.send("Register Route");
}); // setting a function for the register user from the route folder, to use aynchandler we need to wrap all our function inside it

module.exports = {
  registerUser,
};
