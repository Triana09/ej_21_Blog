const { Article } = require("../models");
const confirmationEmail = require("../email");
const { User } = require("../models");
const { Role } = require("../models");
const { validationResult } = require("express-validator");
const formidable = require("formidable");
const express = require("express");

async function showHomeAdmin(req, res) {
  const options = { baseUrl: req.baseUrl };
  const articles = await Article.findAll({ include: User });
  res.render("admin", { articles, options, login: res.locals });
}

async function addArticle(req, res) {
  const form = formidable({
    keepExtensions: true,
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const valores = req.body;
    const validaciones = errors.array();
    res.render("add", { validaciones: validaciones, valores: valores });
  } else {
    form.parse(req, async (err, fields, files) => {
      const newArticles = await Article.create({
        title: fields.titleNewArt,
        img: files.imgFileNewArt.filepath,
        content: fields.contentNewArt,
        userId: req.user.id,
        creationDate: Date.now(),
      });

      confirmationEmail();
      res.redirect("/admin");
    });
  }
}

async function showEditArt(req, res) {
  const article = await Article.findByPk(req.params.id);

  //Codigo sin middleware:
  // if (article.userId === req.user.id || req.user.roleId < 3) {
  //   res.render("edit", { article: article, baseUrl: req.query.baseUrl, userId: req.query.userId });
  // } else {
  //   res.redirect("/admin");
  // }
  res.render("edit", { article: article, baseUrl: req.query.baseUrl, userId: req.query.userId });
}

async function editArticle(req, res) {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const article = await Article.findByPk(req.params.id);
    const valores = req.body;
    const validaciones = errors.array();
    if (req.query.baseUrl === "admin") {
      res.redirect("/admin");
    } else {
      res.redirect(`/perfil/${req.query.userId}`);
    }
    // res.render("edit", { article: article, validaciones: validaciones, valores: valores });
  } else {
    const editArticle = await Article.update(
      {
        title: req.body.titleNewArt,
        img: req.body.imgNewArt,
        content: req.body.contentNewArt,
        userId: req.body.userId_NewArt,
      },
      {
        where: { id: req.params.id },
      },
    );
    res.redirect("/admin");
  }
}

async function deleteArticle(req, res) {
  const article = await Article.findByPk(req.params.id);

  // codigo sin middleware
  // if (article.userId === req.user.id || req.user.roleId === 1) {
  //   const articleGone = await Article.destroy({
  //     where: {
  //       id: req.params.id,
  //     },
  //   });
  //   if (req.query.baseUrl === "admin") {
  //     res.redirect("/admin");
  //   } else {
  //     res.redirect(`/perfil/${req.query.userId}`);
  //   }
  // } else {
  //   res.redirect("/admin");
  // }

  const articleGone = await Article.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (req.query.baseUrl === "admin") {
    res.redirect("/admin");
  } else {
    res.redirect(`/perfil/${req.query.userId}`);
  }
}

// users controllers

async function showUsers(req, res) {
  const options = { baseUrl: req.baseUrl };
  const users = await User.findAll({ include: Role });
  res.render("usersAll", { users, options, login: res.locals });
}

async function deleteUser(req, res) {
  if (req.params.id == req.user.id) {
    res.redirect("/logout");
    const artGone = await Article.destroy({
      where: {
        userId: req.params.id,
      },
    });
    const userGone = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
  } else if (req.user.roleId === 1) {
    const artGone = await Article.destroy({
      where: {
        userId: req.params.id,
      },
    });
    const userGone = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/admin/users");
  } else {
    res.redirect("/error");
  }
}

module.exports = {
  showHomeAdmin,
  addArticle,
  editArticle,
  deleteArticle,
  showEditArt,
  showUsers,
  deleteUser,
};
