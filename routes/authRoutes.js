const express = require("express");
const { User } = require("../models");
const authRouter = express.Router();
const authController = require("../controllers/authController");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

// register get
authRouter.get("/register", authController.showRegister);

// register post
authRouter.post("/register", authController.postRegister);

authRouter.get("/login", authController.showLogin);

authRouter.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login", failureMessage: true }),
  function (req, res) {
    res.redirect("/admin");
  },
);

authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = authRouter;
