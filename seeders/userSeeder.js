const { faker } = require("@faker-js/faker");
const { User } = require("../models");

faker.locale = "es";
// capaz podemos require la table de users y agregarlo random
module.exports = async () => {
  const users = [];

  for (let i = 0; i < 50; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: `${faker.name.firstName() + faker.name.lastName()}@gmail.com`,
      password: "123",
    });
  }
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
