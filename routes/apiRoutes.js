const express = require("express");
const apiRouter = express.Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const apiArtController = require("../controllers/apiArtController");
const apiUserController = require("../controllers/apiUserController");
const apiCommentController = require("../controllers/apiCommentController");

// jsw
const jwt = require("jsonwebtoken");
const token = jwt.sign({ email: "user123", role: 1 }, "pepe", (err, token) => {
  console.log(token);
});

const checkJwt = require("express-jwt");

// ARTICULOS:
apiRouter.get("/articles", apiArtController.showJsonAll);

apiRouter.get("/articles/:userId", apiArtController.showJsonByUser);

apiRouter.get("/article/search", apiArtController.showJsonByTitle);

apiRouter.post("/article/new", apiArtController.newArt);
apiRouter.patch("/article/:id", apiArtController.editArt);
apiRouter.delete("/article/:id", apiArtController.deleteArt);

apiRouter.get("/users", apiUserController.showJsonAllUser);

apiRouter.post("/user/new", apiUserController.newUser);
apiRouter.patch("/user/:id", apiUserController.editUser);
apiRouter.delete("/user/:id", apiUserController.deleteUser);

apiRouter.get("/comments", apiCommentController.showJsonAllComment);

apiRouter.post("/comment/new", apiCommentController.newComment);
apiRouter.patch("/comment/:id", apiCommentController.editComment);
apiRouter.delete("/comment/:id", apiCommentController.deleteComment);

module.exports = apiRouter;
