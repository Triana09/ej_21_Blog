const { faker } = require("@faker-js/faker");
const { Comment } = require("../models");
const rdm = require("./random");

faker.locale = "es";
// capaz podemos require la table de users y agregarlo random
module.exports = async () => {
  const comments = [];

  for (let i = 0; i < 100; i++) {
    comments.push({
      content: faker.lorem.paragraphs(10),
      creationDate: faker.date.between("2020-01-01", "2022-01-01"),
      userId: rdm(1, 50),
      articleId: rdm(1, 100),
    });
  }
  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Users.");
};
