const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");
const { body, validationResult } = require("express-validator");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const userVisible = require("../middlewares/userEnVistas");
const permisosAdmin = require("../middlewares/permisosAdmin");

// Rutas del Admin:
// ...

adminRouter.use("/", ensureAuthenticated);
adminRouter.use("/", userVisible);
adminRouter.get("/", adminController.showHomeAdmin);

adminRouter.get("/crear", (req, res) => {
  res.render("add");
});
adminRouter.post(
  "/",
  // [
  //   body("titleNewArt", "Ingrese un titulo válido").exists().isLength({ min: 1 }, { max: 50 }),
  //   body("contentNewArt", "Ingrese un contenido válido")
  //     .exists()
  //     .isLength({ min: 10 }, { max: 2000 }),
  //   body("userId_NewArt", "Ingrese un valor numérico").exists().isNumeric(),
  // ],
  adminController.addArticle,
);

adminRouter.get("/editar/:id", permisosAdmin.editArtPass, adminController.showEditArt);
adminRouter.post(
  "/editar/:id",
  [
    body("titleNewArt", "Ingrese un titulo válido").exists().isLength({ min: 1 }, { max: 50 }),
    body("contentNewArt", "Ingrese un contenido válido")
      .exists()
      .isLength({ min: 10 }, { max: 2000 }),
    body("userId_NewArt", "Ingrese un valor numérico").exists().isNumeric(),
  ],
  adminController.editArticle,
);

adminRouter.post("/eliminar/:id", permisosAdmin.deleteArtPass, adminController.deleteArticle);

adminRouter.get("/users", adminController.showUsers);
adminRouter.post("/users/eliminar/:id", adminController.deleteUser);

module.exports = adminRouter;
