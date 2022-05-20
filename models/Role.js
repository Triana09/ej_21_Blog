module.exports = (sequelize, Model, DataTypes) => {
  class Role extends Model {}

  Role.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      role: {
        type: DataTypes.STRING(20),
      },
      commentAny: {
        type: DataTypes.STRING(4),
      },
      articleOwn: {
        type: DataTypes.STRING(4),
      },
      articleAny: {
        type: DataTypes.STRING(4),
      },
      userAny: {
        type: DataTypes.STRING(4),
      },
    },
    {
      sequelize,
      modelName: "role",
    },
  );

  return Role;
};
