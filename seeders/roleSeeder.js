const { Role } = require("../models");
const rdm = require("./random");

module.exports = async () => {
  const admin = await Role.create({ role: "admin" });
  const editor = await Role.create({ role: "editor" });
  const writer = await Role.create({ role: "writer" });
  const reader = await Role.create({ role: "reader" });

  console.log("[Database] Se corrió el seeder de Roles.");
};
