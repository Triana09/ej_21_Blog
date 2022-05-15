const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

const rn = require("random-number");
const options = {
  min: 0,
  max: 100,
  integer: true,
};
rn(options);

faker.locale = "es";
// capaz podemos require la table de users y agregarlo random
module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 100; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      img: "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png",
      content: faker.lorem.paragraphs(),
      userId: rn(options),
    });
  }
  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
