const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");

// Rutas del Admin:
// ...
adminRouter.get("/home", adminController.showHomeAdmin);

module.exports = adminRouter;
