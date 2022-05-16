const { Article } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll({ order: [["createdAt", "DESC"]] });
  res.render("home", { articles });
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
