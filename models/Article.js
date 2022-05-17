module.exports = (sequelize, Model, DataTypes) => {
  class Article extends Model {}

  Article.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 50],
        },
      },
      img: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
        validate: {
          len: [10, 2000],
        },
      },
      creationDate: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "article",
    },
  );

  return Article;
};
