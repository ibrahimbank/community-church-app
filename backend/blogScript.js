require("dotenv").config();
const colors = require("colors");

const blogData = require("./data/Blog");
const connectDB = require("./config/db");
const Blog = require("./models/blogModel");

connectDB();

const importData = async () => {
  try {
    await Blog.deleteMany({});

    await Blog.insertMany(blogData);

    console.log("Data imported successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
