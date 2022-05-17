module.exports = (sequelize, Model, DataTypes) => {
  class Comment extends Model {}

  Comment.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT,
        validate: {
          len: [1, 300],
        },
      },
      creationDate: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "comment",
    },
  );

  return Comment;
};
