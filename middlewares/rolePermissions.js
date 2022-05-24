const { Article, User, Role } = require("../models");

async function canCreate(req, res, next) {
  const userRole = await User.findByPk(req.user.id, { include: { model: Role } });
  const uR = userRole.role;
  const article = await Article.findByPk(req.params.id, {
    include: { model: User },
  });
  article.user.id === req.user.id ? (articleOwner = true) : (articleOwner = false);

  if ((uR.articleOwn.includes("C") && articleOwner === true) || uR.articleAny.includes("C")) {
    next();
  } else {
    res.send("Can't create.");
  }
}

async function canRead(req, res, next) {
  const userRole = await User.findByPk(req.user.id, { include: { model: Role } });
  const uR = userRole.role;
  const article = await Article.findByPk(req.params.id, {
    include: { model: User },
  });
  article.user.id === req.user.id ? (articleOwner = true) : (articleOwner = false);

  if ((uR.articleOwn.includes("R") && articleOwner === true) || uR.articleAny.includes("R")) {
    next();
  } else {
    res.send("Can't read.");
  }
}

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

async function canDelete(req, res, next) {
  const userRole = await User.findByPk(req.user.id, { include: { model: Role } });
  const uR = userRole.role;
  const article = await Article.findByPk(req.params.id, {
    include: { model: User },
  });
  article.user.id === req.user.id ? (articleOwner = true) : (articleOwner = false);

  if ((uR.articleOwn.includes("D") && articleOwner === true) || uR.articleAny.includes("D")) {
    next();
  } else {
    res.send("Can't delete.");
  }
}

module.exports = {
  canCreate,
  canRead,
  canUpdate,
  canDelete,
};
