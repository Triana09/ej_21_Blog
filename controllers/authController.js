const express = require("express");
const { User } = require("../models");

async function showRegister(req, res) {
  res.render("register");
}

async function postRegister(req, res) {
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
      password: req.body.password,
    });
    res.redirect("/admin");
  }
}

module.exports = {
  showRegister,
  postRegister,
};
