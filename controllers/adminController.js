const { Article } = require("../models");
const confirmationEmail = require("../email");
const { User } = require("../models");
const { validationResult } = require("express-validator");

async function showHomeAdmin(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("admin", { articles });
}

async function addArticle(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const valores = req.body;
    const validaciones = errors.array();
    res.render("add", { validaciones: validaciones, valores: valores });
  } else {
    const newArticles = await Article.create({
      title: req.body.titleNewArt,
      img: req.body.imgNewArt,
      content: req.body.contentNewArt,
      userId: req.body.userId_NewArt,
      creationDate: Date.now(),
    });
    confirmationEmail();
    res.redirect("/admin");
  }
}

async function showEditArt(req, res) {
  const article = await Article.findByPk(req.params.id);
  res.render("edit", { article: article });
}
async function editArticle(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const article = await Article.findByPk(req.params.id);
    const valores = req.body;
    const validaciones = errors.array();
    res.render("edit", { article: article, validaciones: validaciones, valores: valores });
  } else {
    const editArticle = await Article.update(
      {
        title: req.body.titleNewArt,
        img: req.body.imgNewArt,
        content: req.body.contentNewArt,
        userId: req.body.userId_NewArt,
      },
      {
        where: { id: req.params.id },
      },
    );
    res.redirect("/admin");
  }
}

async function deleteArticle(req, res) {
  const articleGone = await Article.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/admin");
}

module.exports = {
  showHomeAdmin,
  addArticle,
  editArticle,
  deleteArticle,
  showEditArt,
};
