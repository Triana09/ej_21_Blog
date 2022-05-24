const express = require("express");
const apiRouter = express.Router();
const apiController = require("../controllers/apiController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

// ARTICULOS:
apiRouter.get("/articles", apiController.showJsonAll);

apiRouter.get("/articles/:userId", apiController.showJsonByUser);

// apiRouter.get("/articles/", apiController.showJsonByChar);

// apiRouter.post("/articles", apiController.newArt);
// apiRouter.patch("/articles/id:", apiController.editArt);
// apiRouter.delete("/articles/id:", apiController.deleteArt);

module.exports = apiRouter;
