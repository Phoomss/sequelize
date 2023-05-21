const db = require("../models");

// model
const Review = db.review;

// 1 add review
const addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(200).send(review);
  } catch (error) {
    res.status(500).send("Failed to add review");
  }
};

// 2 get all review
const getAllReview = async (req, res) => {
  try {
    const reviews = await Review.findAll({});
    res.status(200).send(reviews);
  } catch (error) {
    res.status(500).send("Failed to get review");
  }
};

module.exports = {
  addReview,
  getAllReview,
};
