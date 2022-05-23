const bcrypt = require("bcryptjs/dist/bcrypt");
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
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
      roleId: 1,
    });
    res.redirect("/admin");
  }
}

async function showLogin(req, res) {
  res.render("login");
}

module.exports = {
  showRegister,
  postRegister,
  showLogin,
};
