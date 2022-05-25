const sequelize = require("sequelize");
const { Op } = require("sequelize");
const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
const { Role } = require("../models");

const jwt = require("jsonwebtoken");

async function showJsonAll(req, res) {
  console.log(req.user);
  const articles = await Article.findAll();
  res.json(articles);
}

async function showJsonByUser(req, res) {
  const article = await Article.findAll({ where: { userId: req.params.userId } });
  if (article == "") {
    res.json("Usuario no encontrado");
  } else {
    res.json(article);
  }
}

async function showJsonByTitle(req, res) {
  const articlesByTitle = await Article.findAll({
    where: {
      title: {
        [Op.like]: `%Omnis%`,
      },
    },
  });

  if (articlesByTitle == "") {
    res.json("No hay coincidencias");
  } else {
    res.json(articlesByTitle);
  }
}

async function newArt(req, res) {
  try {
    const add = await Article.create({
      title: req.body.title,
      img: req.body.img,
      content: req.body.content,
      userId: req.body.userId,
      creationDate: Date.now(),
    });
    res.json("creado con exito");
  } catch (error) {
    res.json("Error no se pudo crear");
  }
}

async function editArt(req, res) {
  const editArticle = await Article.update(
    {
      title: req.body.title,
      img: req.body.img,
      content: req.body.content,
      userId: req.body.userId,
    },
    {
      where: { id: req.params.id },
    },
  );

  if (editArticle) {
    res.json("editado con exito");
  } else {
    res.json("Error no existe ese articulo");
  }
}

async function deleteArt(req, res) {
  const gone = await Article.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (gone) {
    res.json("eliminado cone exito");
  } else {
    res.json("no existe ese articulo");
  }
}

module.exports = {
  showJsonAll,
  showJsonByUser,
  showJsonByTitle,
  newArt,
  editArt,
  deleteArt,
};
