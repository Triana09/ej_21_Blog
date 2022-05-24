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
        type: Datatypes.BOOLEAN,
      },
      write: {
        type: Datatypes.BOOLEAN,
      },
      edit: {
        type: Datatypes.BOOLEAN,
      },
      delete: {
        type: Datatypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "role",
    },
  );
  return Role;
};
