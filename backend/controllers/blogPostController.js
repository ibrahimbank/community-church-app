const asyncHandler = require("express-async-handler");
const res = require("express/lib/response");

const Blog = require("../models/blogModel");

//@desc Get blog posts
//@Route /api/blog-posts
// @access Public

const getBlogPosts = asyncHandler(async (req, res) => {
  const posts = await Blog.find({});

  res.status(200).json(posts);
});

//@desc Get blog post
//@Route /api/blog-post/:id
// @access Public

const getBlogPost = asyncHandler(async (req, res) => {
  const post = await Blog.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Blog Post not found");
  }

  res.status(200).json(post);
});

module.exports = {
  getBlogPosts,
  getBlogPost,
};
