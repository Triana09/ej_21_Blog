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
  const hash = await bcrypt.hash("a", 10);

  const add = await User.create({
    firstname: "Agregado con POST",
    lastname: "pepe",
    email: "agregado@gmail.vom",
    password: hash,
    roleId: 1,
  });
  // res.redirect(/articles);
  res.send("creado con exito");
}

async function editUser(req, res) {
  // pendiente: no anda req.body, llega vacio
  // console.log(req.body);

  const editUser = await User.update(
    {
      firstname: "Agregado con POST",
      lastname: "pepe",
      email: "agregado@gmail.vom",
      // password: hash,
      roleId: 1,
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
