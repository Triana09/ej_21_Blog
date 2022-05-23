const { Article, User, Role } = require("../models");

const canUpdate = async function (req, res, next) {
  const userRole = await User.findByPk(req.user.id, { include: { model: Role } });
  const uR = userRole.role;
  //   const article = await Article.findByPk(req.params.id, {
  //     include: { model: User, include: { model: Role } },
  //   });
  //   article.user.id === req.user.id ? (articleOwner = true) : (articleOwner = false);
  if (uR.articleOwn.includes("U") || uR.articleAny.includes("U")) {
    console.log("canUpdate", true);
    next();
  } else {
    console.log("canUpdate", false);
    res.send("Can't Update.");
  }
};

const canCreate = async function (req, res, next) {
  const userRole = await User.findByPk(req.user.id, { include: { model: Role } });
  const uR = userRole.role;
  if (uR.articleOwn.includes("C") || uR.articleAny.includes("C")) {
    console.log("canCreate", true);
    next();
  } else {
    console.log("canCreate", false);
    res.send("Can't Update.");
  }
};

module.exports = {
  canUpdate,
};
