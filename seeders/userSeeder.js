const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs/dist/bcrypt");
const rdm = require("./random");

faker.locale = "es";
// capaz podemos require la table de users y agregarlo random
module.exports = async () => {
  const users = [];

  for (let i = 0; i < 50; i++) {
    const hash = await bcrypt.hash("a", 10);
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    users.push({
      firstname: firstName,
      lastname: lastName,
      email: `${firstName + lastName}@gmail.com`,
      password: hash,
      roleId: rdm(1, 4),
    });
  }
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
