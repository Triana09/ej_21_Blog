const { faker } = require("@faker-js/faker");
const { Role } = require("../models");
const bcrypt = require("bcryptjs/dist/bcrypt");

faker.locale = "es";
// capaz podemos require la table de users y agregarlo random
module.exports = async () => {
  const roles = [
    { role: "Lector", commentAny: "CR", articleOwn: "R", articleAny: "R", userAny: "" },
    { role: "Escritor", commentAny: "CR", articleOwn: "CRUD", articleAny: "R", userAny: "" },
    { role: "Editor", commentAny: "CRUD", articleOwn: "CRUD", articleAny: "CRU", userAny: "" },
    {
      role: "Administrador",
      commentAny: "CRUD",
      articleOwn: "CRUD",
      articleAny: "CRUD",
      userAny: "CRUD",
    },
  ];

  await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de Role.");
};
