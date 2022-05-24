const express = require("express");
const loginRoute = express.Router();
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

// login get
loginRoute.get("/", (req, res) => {
  res.render("login");
});

// login post
// loginRoute.post(
//   "/",
//   passport.authenticate("local", { failureRedirect: "/login", failureMessage: true }),
//   function (req, res) {
//     res.redirect("/");
//   },
// );

loginRoute.post("/", function login(req, res) {
  passport.authenticate("local", {
    successRedirect: req.session.previousUrl,
    failureRedirect: "/login",
  })(req, res);
});
module.exports = loginRoute;
