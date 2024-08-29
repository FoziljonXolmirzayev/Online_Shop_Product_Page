const express = require("express");
const {
  createComment,
  getComments,
  deleteComment,
  updateComment,
} = require("../modules/blogComment");
const commentRoute = express.Router();

commentRoute.get("/get", getComments);
commentRoute.post("/create", createComment);
commentRoute.put("/update", updateComment);
commentRoute.delete("/delete", deleteComment);

module.exports = commentRoute;
