const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");

async function showHome(req, res) {
  const options = { baseUrl: req.baseUrl };

  const articles = await Article.findAll({ include: User }, { order: [["creationDate", "DESC"]] });
  const users = await User.findAll();
  const comments = await Comment.findAll();
  res.render("home", { articles, users, comments, options });
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

async function showJson(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  redirectToHome,
  showContact,
  showAboutUs,
  showJson,
};
