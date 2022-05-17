const { Article } = require("../models");
const confirmationEmail = require("../email");
const { User } = require("../models");

async function showHomeAdmin(req, res) {
  const options = { baseUrl: req.baseUrl };
  const articles = await Article.findAll({ include: User });
  res.render("admin", { articles, options });
}

async function addArticle(req, res) {
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

async function showEditArt(req, res) {
  const article = await Article.findByPk(req.params.id);
  res.render("edit", { article: article });
}
async function editArticle(req, res) {
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
