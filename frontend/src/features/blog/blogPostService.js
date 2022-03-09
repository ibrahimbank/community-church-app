import axios from "axios";

const API_URL = "/api/blog-posts";

//get the blogs

const blogPosts = async () => {
  const response = await axios.get(API_URL);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//get a blog

const singlePost = async (blogId) => {
  const response = await axios.get(API_URL + blogId);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const blogPostService = {
  blogPosts,
  singlePost,
};

export default blogPostService;
