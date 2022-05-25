// bcrypt
const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  // class User extends Model {
  //   static hashear(password) {
  //     const hash = await bcrypt.hash(password, 10);
  //     return hash;
  //   }
  //   static checkHash(password) {}
  // }

  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCreate: async (user, options) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
        },
        beforeBulkCreate: async (users, options) => {
          for (user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
          }
        },
      },
      sequelize,
      modelName: "user",
    },
  );

  return User;
};
