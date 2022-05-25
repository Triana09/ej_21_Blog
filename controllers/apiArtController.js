const sequelize = require("sequelize");
const { Op } = require("sequelize");
const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
const { Role } = require("../models");

async function showJsonAll(req, res) {
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
  // pendiente: no anda req.body, llega vacio
  // console.log(req.body);

  const add = await Article.create({
    title: "Agregado con Post.",
    img: "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png",
    content:
      "asdfasdfsadfsadfasdf quis facilis vitae et. Occaecati mollitia accusantium recusandae. Est voluptas velit ut quia doloremque.\nNulla voluptatem tenetur autem quo. Ipsum a repellendus in ipsam facilis voluptatibus et. Voluptatem molestias quam distinctio eligendi sit quo harum earum. Quas non eaque. Mollitia sint eos non repellendus rerum similique cupiditate.\nSaepe at voluptates dolorem inventore ea veritatis inventore et labore. Qui molestiae eos nam vel. Iure eum nihil cumque mollitia numquam odit placeat sapiente. Eaque enim amet iste et voluptates est quos. Nemo et voluptates architecto et. Quis delectus sunt ut magni sit.",
    userId: 1,
    creationDate: Date.now(),
  });
  // res.redirect(/articles);
  res.send("creado con exito");
}

async function editArt(req, res) {
  // pendiente: no anda req.body, llega vacio
  // console.log(req.body);

  const editArticle = await Article.update(
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
