const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");
const { body, validationResult } = require("express-validator");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
// Rutas del Admin:
// ...

adminRouter.use("/", ensureAuthenticated);
adminRouter.get("/", adminController.showHomeAdmin);

adminRouter.get("/crear", (req, res) => {
  res.render("add");
});
adminRouter.post("/", adminController.addArticle);

adminRouter.get("/editar/:id", adminController.showEditArt);
adminRouter.post("/editar/:id", adminController.editArticle);

adminRouter.post("/eliminar/:id", adminController.deleteArticle);

module.exports = adminRouter;
