const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll({ order: [["createdAt", "DESC"]] });
  const users = await User.findAll();
  const comments = await Comment.findAll();
  res.render("home", { articles, users, comments });
}

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

async function showJson(req, res) {
  const articles = await Article.findAll();
  res.json(articles);
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showContact,
  showAboutUs,
  showJson,
};
