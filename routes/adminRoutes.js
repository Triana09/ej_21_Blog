const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");

// Rutas del Admin:
// ...
adminRouter.get("/", adminController.showHomeAdmin);

adminRouter.get("/crear", (req, res) => {
  res.render("add");
});
adminRouter.post("/", adminController.addArticle);

adminRouter.get("/editar/:id", adminController.showEditArt);
adminRouter.post("/editar/:id", adminController.editArticle);

adminRouter.post("/eliminar/:id", adminController.deleteArticle);

module.exports = adminRouter;
