const express = require("express");
const logoutRoute = express.Router();

// logout get
logoutRoute.get("/", (req, res) => {
  //   res.setHeader("set-cookie", "mycookie=; max-age=0");
  req.logout();

  res.redirect("/login");
});

module.exports = logoutRoute;
