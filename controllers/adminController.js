const { Article } = require("../models");

async function showHomeAdmin(req, res) {
  const articles = await Article.findAll();
  res.render("home", { articles });
}

module.exports = {
  showHomeAdmin,
};
