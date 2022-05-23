const express = require("express");
const { User } = require("../models");
const authRouter = express.Router();
const authController = require("../controllers/authController");

// register get
authRouter.get("/", authController.showRegister);

// register post
authRouter.post("/", authController.postRegister);

module.exports = authRouter;
