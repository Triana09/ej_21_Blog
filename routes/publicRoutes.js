const express = require("express");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");
const articleController = require("../controllers/articleController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const userVisible = require("../middlewares/userEnVistas");

// Rutas Públicas:
// ...
publicRouter.use("/", userVisible);

publicRouter.get("/", pagesController.redirectToHome);

publicRouter.get("/home/", pagesController.showHome);

publicRouter.get("/perfil/:id", ensureAuthenticated, pagesController.showPerfil);

publicRouter.get("/article/:id", articleController.show);

publicRouter.post("/article/:id", ensureAuthenticated, articleController.postComment);

publicRouter.post("/comentario/:id", articleController.deleteComment);

publicRouter.get("/about", pagesController.showAboutUs);

publicRouter.get("/contact", pagesController.showContact);

publicRouter.get("/error", (req, res) => {
  res.render("errorPage");
});

module.exports = publicRouter;
