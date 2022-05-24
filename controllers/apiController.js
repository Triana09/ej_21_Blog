const sequelize = require("sequelize");
const { Op } = require("sequelize");
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

async function showJsonByTitle(req, res) {
  const articlesByTitle = await Article.findAll({
    where: {
      title: {
        [Op.like]: `%porro%`,
      },
    },
  });
  console.log(articlesByTitle);
  res.json(articlesByTitle);
}

async function newArt(req, res) {
  // usar spread

  const add = await Article.create({});
  const articles = await Article.findAll();
  res.json(articles);
}

async function editArt(req, res) {
  const articles = await Article.findAll();

  res.json();
}

async function deleteArt(req, res) {
  const gone = await Article.destroy({
    where: {
      id: req.params.id,
    },
  });

  const articles = await Article.findAll();
  res.json(articles);
}

module.exports = {
  showJsonAll,
  showJsonByUser,
  showJsonByTitle,
  newArt,
  editArt,
  deleteArt,
};
