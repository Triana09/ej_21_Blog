module.exports = (req, res, next) => {
  if (req.auth.role < 2) {
    return next();
  } else {
    res.redirect("/error");
  }
};
