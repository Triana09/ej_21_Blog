const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");
const { body, validationResult } = require("express-validator");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const rolePermissions = require("../middlewares/rolePermissions");
// Rutas del Admin:
// ...

adminRouter.use("/", ensureAuthenticated);

adminRouter.get("/", adminController.showHomeAdmin);
adminRouter.get("/crear", adminController.showCreate);
adminRouter.post("/", adminController.addArticle);
adminRouter.get("/editar/:id", rolePermissions.canUpdate, adminController.showEditArt);
adminRouter.post("/editar/:id", rolePermissions.canUpdate, adminController.editArticle);

adminRouter.post("/eliminar/:id", rolePermissions.canDelete, adminController.deleteArticle);

module.exports = adminRouter;
