const { es } = require("date-fns/locale");
const sequelize = require("sequelize");
const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
const { Role } = require("../models");

async function showHome(req, res) {
  const options = { baseUrl: req.baseUrl };

  const articles = await Article.findAll(
    { include: User },
    { order: sequelize.literal("creationDate DESC") },
  );
  const users = await User.findAll();
  const comments = await Comment.findAll();
  res.render("home", { articles, users, comments, options });
}

async function showPerfil(req, res) {
  // const user = await User.findByPk(req.params.id, { include: Role }, { include: Article });
  const articles = await Article.findAll({
    where: {
      userId: req.params.id,
    },
  });
  const user = await User.findByPk(req.params.id, { include: Role });
  res.render("perfil", { user, articles });
}

async function redirectToHome(req, res) {
  res.redirect("/home");
}

async function showContact(req, res) {
  const options = { baseUrl: req.baseUrl };
  res.render("contact", { options });
}

async function showAboutUs(req, res) {
  const options = { baseUrl: req.baseUrl };
  res.render("aboutUs", { options });
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  redirectToHome,
  showContact,
  showAboutUs,
  showPerfil,
};
