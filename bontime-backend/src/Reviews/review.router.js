const express = require("express");
const Review = require("./review.model");
const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let review = await Review.find();
    res.send(review);
  } catch (e) {
    res.send(e);
  }
});
app.post("/", async (req, res) => {
    const {avatar,review,name,position} = req.body;
  try {
      let review = await Review.create({
        avatar,
        review,
        name,
        position
      })
      res.send("Revew Updated Successfully")

  } catch (e) {
     res.send(e);
  }
});
module.exports = app;
