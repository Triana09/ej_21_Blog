const { Faker, default: faker } = require("@faker-js/faker");
const { Role } = require("../models");
faker.locale = "es";
module.exports = async () => {
  const roles = [
    { name: "lector", read: true, write: false, edit: false, delete: false },
    { name: "editor", read: true, write: false, edit: true, delete: false },
    { name: "escritor", read: true, write: true, edit: true, delete: false },
    { name: "administrador", read: true, write: true, edit: true, delete: true },
  ];
  await Role.bulkCreate(roles);
  console.log("[Database] Se corrio el seeder de roles");
};
