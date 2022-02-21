//@desc Register a new user
//@Route /api/users
// @access Public
const registerUser = (req, res) => {
  const {} = req.body; //destructing things to get from the user

  res.send("Register Route");
}; // setting a function for the register user from the route folder

module.exports = {
  registerUser,
};
