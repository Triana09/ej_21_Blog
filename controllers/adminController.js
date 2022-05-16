const { Article } = require("../models");
<<<<<<< Updated upstream
const confirmationEmail = require("../email");
=======
const { User } = require("../models");
>>>>>>> Stashed changes

async function showHomeAdmin(req, res) {
  const articles = await Article.findAll();
  const users = await User.findAll();
  res.render("admin", { articles, users });
}

async function addArticle(req, res) {
  const newArticles = await Article.create({
    title: req.body.titleNewArt,
    img: req.body.imgNewArt,
    content: req.body.contentNewArt,
    userId: req.body.userId_NewArt,
  });
  confirmationEmail();
  res.redirect("/admin");
}

async function showEditArt(req, res) {
  const articles = await Article.findAll();
  console.log(articles[req.params.id]);
  res.render("edit", { article: articles[req.params.id - 1] });
}
async function editArticle(req, res) {
  // const editArticle = await Article.update(
  //   {
  //     title: req.body.titleNewArt,
  //     img: req.body.imgNewArt,
  //     content: req.body.contentNewArt,
  //     userId: req.body.userId_NewArt,
  //   },
  //   {
  //     where: { id: 2 },
  //   },
  // );
  Article.findByPk(req.params.id).then((article) => {
    article
      .update({
        title: req.body.titleNewArt,
        img: req.body.imgNewArt,
        content: req.body.contentNewArt,
        userId: req.body.userId_NewArt,
      })
      .then((article) => {
        console.log(article);
      });
  });

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
