const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const registerRoute = require("./registerRoutes");
const loginRoute = require("./loginRoutes");
const logoutRoute = require("./logoutRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use("/admin", adminRoutes);
  app.use("/registro", registerRoute);
  app.use("/login", loginRoute);
  app.use("/logout", logoutRoute);
};
// Agregar url api
