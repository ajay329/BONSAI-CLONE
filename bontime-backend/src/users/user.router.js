const express = require("express");
const User = require("./user.model");
const app = express.Router();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.status(200).send({
          token: `${email}:${password}`,
        });
      } else {
        res.status(404).send("Authentication failed, Incorrect password");
      }
    } else {
      res.status(404).send(`User with  email:${email} not found`);
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});
app.post("/signup", async (req, res) => {
  const { email, password, name, country, currency } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).send("User with this email already exists");
    } else {
      let user = await User.create({
        email,
        password,
        name,
        country,
        currency,
      });
      res.status(200).send({
        token: `${email}:${password}`,
      });
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});
app.get("/", async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
module.exports = app;
