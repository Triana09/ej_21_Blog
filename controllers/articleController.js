const sendEmail = require("../email");
const { Article } = require("../models");
const { Comment } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const options = { baseUrl: req.baseUrl };
  const article = await Article.findByPk(req.params.id);
  const comments = await Comment.findAll({ where: { articleId: req.params.id } });

  const checkLog = req.isAuthenticated();
  let rol = 4;
  if (req.isAuthenticated()) {
    rol = req.user.roleId;
  }
  res.render("article", { article, comments, options, checkLog, rol, login: res.locals });
}

async function postComment(req, res) {
  const newComment = await Comment.create({
    content: req.body.contentComment,
    articleId: req.params.id,
    creationDate: Date.now(),
  });
  res.redirect("/article/" + req.params.id);
}

async function deleteComment(req, res) {
  const comment = await Comment.findByPk(req.params.id);
  if (req.user.roleId < 3) {
    const gone = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/article/" + comment.articleId);
  } else {
    res.redirect("/article/" + comment.articleId);
  }
}

// Show the form for creating a new resource
async function create(req, res) {
  sendEmail();
}

module.exports = {
  index,
  show,
  postComment,
  create,
  deleteComment,
};
