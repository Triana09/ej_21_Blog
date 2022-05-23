const express = require("express");
const loginRoute = express.Router();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

// login get
loginRoute.get("/", (req, res) => {
  console.log(3, res.locals);
  if (res.locals.msg !== null) {
    const redirectMsg = res.local.msg;
  } else {
    const redirectMsg = "";
  }

  res.render("login", { redirectMsg });
});

// login post
loginRoute.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/login", failureMessage: true }),
  function (req, res) {
    res.redirect("/admin");
  },
);

module.exports = loginRoute;
