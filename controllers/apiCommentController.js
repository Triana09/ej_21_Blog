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
  // pendiente: no anda req.body, llega vacio
  console.log(req.body.id);

  const add = await Comment.create({
    content: "comentario creado con post",
    creationDate: Date.now(),
    userId: 1,
    articleId: 5,
  });
  // res.redirect(/articles);
  res.json("creado con exito");
}

async function editComment(req, res) {
  // pendiente: no anda req.body, llega vacio
  // console.log(req.body);

  const editComment = await Comment.update(
    {
      title: "editado",
      img: "editado",
      content: "ediatdo loremalksfjlkasjflasjfkljdksadfasdfasdf",
      userId: 1,
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
