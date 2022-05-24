module.exports = (sequelize, Model, Datatypes) => {
  class Role extends Model {}

  Role.init(
    {
      id: {
        type: Datatypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Datatypes.STRING,
      },
      read: {
        type: Boolean,
      },
      write: {
        type: Boolean,
      },
      edit: {
        type: Boolean,
      },
      delete: {
        type: Boolean,
      },
    },
    {
      sequelize,
      modelName: "role",
    },
  );
  return Role;
};
