const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const rdm = require("./random");

faker.locale = "es";
// capaz podemos require la table de users y agregarlo random
module.exports = async () => {
  const testingUser = await User.create({
    firstname: "Tri",
    lastname: "Misa",
    email: "triana2109@gmail.com",
    password: "a",
    roleId: 1,
  });
  const testinUser = await User.create({
    firstname: "asdf",
    lastname: "adf",
    email: "tadfadsfna2109@gmail.com",
    password: "a",
    roleId: 1,
  });

  const users = [];

  for (let i = 0; i < 49; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    users.push({
      firstname: firstName,
      lastname: lastName,
      email: `${firstName + lastName}@gmail.com`,
      // password: hash,
      // password: User.hashear("a"),
      password: "a",
      roleId: rdm(1, 4),
    });
  }
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
