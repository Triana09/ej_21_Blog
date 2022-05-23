const ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    console.log("is authenticated?: " + req.isAuthenticated());
    next();
  } else {
    console.log("is authenticated?: " + req.isAuthenticated());
    res.redirect("/login");
  }
  return;
};

module.exports = ensureAuthenticated;
