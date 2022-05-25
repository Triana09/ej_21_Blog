const sequelize = require("sequelize");
const { Op } = require("sequelize");
const { Article } = require("../models");
const { User } = require("../models");
const { Comment } = require("../models");
const { Role } = require("../models");
const bcrypt = require("bcryptjs/dist/bcrypt");

async function showJsonAllUser(req, res) {
  const users = await User.findAll();
  res.json(users);
}

async function newUser(req, res) {
  // pendiente: no anda req.body, llega vacio
  // console.log(req.body);
  try {
    const add = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      roleId: req.body.roleId,
    });
    res.json("creado con exito");
  } catch (error) {
    res.json("Error, info no valida");
  }
}

async function editUser(req, res) {
  const editUser = await User.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      roleId: req.body.roleId,
    },
    {
      where: { id: req.params.id },
    },
  );
  if (editUser) {
    res.json("editado con exito");
  } else {
    res.json("Error no existe ese usuario");
  }
}

async function deleteUser(req, res) {
  const gone = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (gone) {
    res.json("eliminado cone exito");
  } else {
    res.json("no existe ese usuario");
  }
}

module.exports = {
  showJsonAllUser,
  newUser,
  editUser,
  deleteUser,
};
