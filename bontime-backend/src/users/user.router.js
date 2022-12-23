const express = require("express");
const User = require("./user.model");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const app = express.Router();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const Valid = await argon2.verify(user.password, password);

    if (Valid) {
      const { _id, name, email } = user;
      const token = jwt.sign({ id: _id, name, email }, "SECRET1234", {
        expiresIn: "1 hour",
      });

      const refreshToken = jwt.sign({}, "REFRESHTOKEN", {
        expiresIn: "7 days",
      });
      return res.status(200).send({
        message: "Login success",
        token,
        refreshToken,
      });
    }
  } catch (err) {
    return res.status(403).send(err.message);
  }

  // return res.send("Invalid login");
});
app.post("/signup", async (req, res) => {
  const { email, password, name, country, currency } = req.body;
  const hash = await argon2.hash(password);
  let existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400).send("User with this email already exists");
  }
  try {
    let user = await User.create({
      email,
      password: hash,
      name,
      country,
      currency,
    });
    res.status(200).send({
      token: `${email}:${password}`,
    });
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
