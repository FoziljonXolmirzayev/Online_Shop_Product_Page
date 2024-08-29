const express = require("express");
const {
  createBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
} = require("../modules/blog");
const blogRoute = express.Router();

blogRoute.get("/get", getBlogs);
blogRoute.post("/create", createBlog);
blogRoute.put("/update", updateBlog);
blogRoute.delete("/delete", deleteBlog);

module.exports = blogRoute;
