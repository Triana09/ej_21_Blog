const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");

// Rutas Públicas:
// ...
publicRouter.get("/", pagesController.redirectToHome);

publicRouter.get("/home/", pagesController.showHome);

publicRouter.get("/article/:id", articleController.show);

publicRouter.post("/article/:id", articleController.postComment);

publicRouter.get("/about", pagesController.showAboutUs);

publicRouter.get("/api/articles", pagesController.showJson);

publicRouter.get("/contact", pagesController.showContact);

module.exports = publicRouter;
