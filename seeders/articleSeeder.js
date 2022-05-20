const { faker } = require("@faker-js/faker");
const { Article } = require("../models");
// const { cantArt, cantUser, cantComment } = require("./count");
const rdm = require("./random");
faker.locale = "es";

// capaz podemos require la table de users y agregarlo random
module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 100; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      img: "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png",
      content: faker.lorem.paragraphs(),
      userId: Math.ceil(Math.random() * 10), // ! cantidad de usaurios creados y contador de usuarios en el articleSeeder deben coincidir
      creationDate: faker.date.between("2020-01-01", "2022-01-01"),
    });
  }
  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
