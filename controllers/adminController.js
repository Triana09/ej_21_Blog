const { Article } = require("../models");
const confirmationEmail = require("../email");
const { User } = require("../models");

async function showHomeAdmin(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("admin", { articles });
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
  const articles = await Article.findAll();
  res.render("edit", { article: articles[req.params.id - 1] });
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
  // Article.findByPk(req.params.id).then((article) => {
  //   article
  //     .update({
  //       title: req.body.titleNewArt,
  //       img: req.body.imgNewArt,
  //       content: req.body.contentNewArt,
  //       userId: req.body.userId_NewArt,
  //     })
  //     .then((article) => {
  //       console.log(article);
  //     });
  // });

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
