const express = require("express");
const reviewsRoute = express.Router();
const {
  createReview,
  updateReview,
  deleteReview,
  getReviewsByProductId,
} = require("../modules/review");

reviewsRoute.get("/get", getReviewsByProductId);
reviewsRoute.post("/create", createReview);
reviewsRoute.put("/update", updateReview);
reviewsRoute.delete("/delete", deleteReview);

module.exports = reviewsRoute;
