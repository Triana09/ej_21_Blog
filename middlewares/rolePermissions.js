const { Article, User, Role } = require("../models");

async function canUpdate(req, res, next) {
  const userRole = await User.findByPk(req.user.id, { include: { model: Role } });
  const uR = userRole.role;
  const article = await Article.findByPk(req.params.id, {
    include: { model: User },
  });
  article.user.id === req.user.id ? (articleOwner = true) : (articleOwner = false);

  if ((uR.articleOwn.includes("U") && articleOwner === true) || uR.articleAny.includes("U")) {
    next();
  } else {
    res.send("Can't update.");
  }
}

module.exports = { canUpdate };
