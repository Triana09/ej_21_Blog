const { Faker, default: faker } = require("@faker-js/faker");
const { Role } = require("../models");
faker.locale = "es";
module.exports = async () => {
  const roles = [
    { name: "lector", write: true, read: true, edit: true, delete: true },
    { name: "editor", write: true, read: true, edit: true, delete: true },
    { name: "escritor", write: true, read: true, edit: true, delete: true },
    { name: "administrador", write: true, read: true, edit: true, delete: true },
  ];
  await Role.bulkCreate(roles);
  console.log("[Database] Se corrio el seeder de roles");
};
