const ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    // res.locals.msg = "User not logged in. Please log in!";
    // console.log(2, res.locals);

    res.redirect("/login");
  }
  return;
};

module.exports = ensureAuthenticated;
