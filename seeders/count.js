const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");

async function cantArt() {
  const count = await Article.count();
  return count;
}

async function cantUser() {
  const count = await User.count();
  return count;
}

async function cantComment() {
  const count = await Comment.count();
  return count;
}

module.exports = {
  cantArt,
  cantUser,
  cantComment,
};
