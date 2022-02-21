const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;

const app = express(); //initializing express and saving it into variable app

//anything app.use must be defined before any route, the orders matters

app.use(express.json()); //creating a middleware(body parser)

app.use(express.urlencoded({ extended: false })); //we use this to get the content of the body

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welocome to the Church" }); //data to be sent
}); //setting get request, it takes in your the url you want to set it to and a function which have the request and response as an argument. this is the root route ('/')

app.use("/api/users", require("./route/userRoute")); //importing the user route and setting our desire endpoint to api/users

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
