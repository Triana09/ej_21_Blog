const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");

// Rutas Públicas:
// ...
publicRouter.get("/", pagesController.redirectToHome);

publicRouter.get("/home/", pagesController.showHome);

publicRouter.get("/article/:id", articleController.show);

publicRouter.get("/about", (req, res) => {
  res.render("aboutUs");
});

publicRouter.get("/api/articles", pagesController.showJson);

publicRouter.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = publicRouter;
