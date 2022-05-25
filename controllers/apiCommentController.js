const sequelize = require("sequelize");
const { Op } = require("sequelize");
const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
const { Role } = require("../models");

async function showJsonAllComment(req, res) {
  const comments = await Comment.findAll();
  res.json(comments);
}

async function newComment(req, res) {
  try {
    const add = await Comment.create({
      content: "comentario creado con post",
      creationDate: Date.now(),
      userId: 1,
      articleId: 5,
    });
    res.json("creado con exito");
  } catch (error) {
    res.json("Error, no pudo ser creado");
  }
}

async function editComment(req, res) {
  const editComment = await Comment.update(
    {
      content: req.body.content,
      userId: req.body.userId,
      articleId: req.body.articleId,
    },
    {
      where: { id: req.params.id },
    },
  );

  if (editComment) {
    res.json("editado con exito");
  } else {
    res.json("Error no existe ese comentario");
  }
}

async function deleteComment(req, res) {
  const gone = await Comment.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (gone) {
    res.json("eliminado cone exito");
  } else {
    res.json("no existe ese comentario");
  }
}

module.exports = {
  showJsonAllComment,
  newComment,
  editComment,
  deleteComment,
};
