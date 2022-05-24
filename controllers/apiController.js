const sequelize = require("sequelize");
const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
const { Role } = require("../models");

async function showJsonAll(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

async function showJsonByUser(req, res) {
  const article = await Article.findAll({ where: { userId: req.params.userId } });
  res.json(article);
}

module.exports = {
  showJsonAll,
  showJsonByUser,
  //   showJsonByChar,
  //   newArt,
  //   editArt,
  //   deleteArt,
};
