const { Article } = require("../models");

async function editArtPass(req, res, next) {
  const article = await Article.findByPk(req.params.id);
  if (article.userId === req.user.id || req.user.roleId < 3) {
    next();
  } else {
    res.redirect("/error");
  }
}

async function deleteArtPass(req, res, next) {
  const article = await Article.findByPk(req.params.id);
  if (article.userId === req.user.id || req.user.roleId === 1) {
    next();
  } else {
    res.redirect("/error");
  }
}

module.exports = {
  editArtPass,
  deleteArtPass,
};
