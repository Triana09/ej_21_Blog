require("dotenv").config();
const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs/dist/bcrypt");

faker.locale = "es";
// capaz podemos require la table de users y agregarlo random
module.exports = async () => {
  const users = [];

  // ! revisar la cantidad de usaurios creados y que coincida con el contador de usuarios en el articleSeeder
  for (let i = 0; i < process.env.DEV_SETTING_TOTALUSERS; i++) {
    const hash = await bcrypt.hash("a", 10);
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    users.push({
      firstname: firstName,
      lastname: lastName,
      email: `${firstName + lastName}@gmail.com`,
      password: hash,
      roleId: Math.ceil(Math.random() * 4),
    });
  }
  const hash = await bcrypt.hash("admin", 10);
  users.push({
    firstname: "admin",
    lastname: "admin",
    email: `admin`,
    password: hash,
    roleId: 4,
  });
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
