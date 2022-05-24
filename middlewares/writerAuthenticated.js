const { sequelize } = require("../models");

const User = require("./User")(sequelize, Model, Datatypes);
const Comment = require("./Comment")(sequelize, Model, Datatypes);
const Article = require("./Article")(sequelize, Model, Datatypes);
const Role = require("./Role")(sequelize, Model, Datatypes);

User.hasMany(Article);
Article.belongTo(User);

Article.hasMany(Comment);
Comment.belongTo(Article);

Role.hasMany(User);
User.belongTo(Role, {
  foreignkey: {
    allowNull: false,
    defaultValue: 1,
  },
});
module.exports = {
  sequelize,
  User,
  Comment,
  Article,
  Role,
};
