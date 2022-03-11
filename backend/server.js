const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");

//connecting to database
connectDB();

const app = express(); //initializing express and saving it into variable app

//anything app.use must be defined before any route, the orders matters

app.use(express.json()); //creating a middleware(body parser)

app.use(express.urlencoded({ extended: false })); //we use this to get the content of the body

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welocome to the Church" }); //data to be sent
}); //setting get request, it takes in your the url you want to set it to and a function which have the request and response as an argument. this is the root route ('/')

app.use("/api/users", require("./route/userRoute")); //importing the user route and setting our desire endpoint to api/users
app.use("/api/blog-posts", require("./route/blogPostRoute")); //importing the blog-post route and setting our desire endpoint to api/users

app.use("/api/contact", require("./route/contactRoute"));

// app.use("/api/upcomingEvents", require("./route/upcomingEventsRoute"));

app.use(errorHandler); //using the error handler we created

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
