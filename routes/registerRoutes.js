const express = require("express");
const { User } = require("../models");
const registerRoute = express.Router();

// register get
registerRoute.get("/", (req, res) => {
  res.render("register");
});

// register post
registerRoute.post("/", async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (user) {
    res.redirect("/login");
  } else {
    const newUser = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: "a",
      roleId: 4,
    });
    res.redirect("/home");
  }
});

module.exports = registerRoute;
