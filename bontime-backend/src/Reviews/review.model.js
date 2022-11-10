const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  avatar: { type: String, required: true },
  review: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String },
});

const Review = mongoose.model("Review",reviewSchema)
module.exports = Review;
