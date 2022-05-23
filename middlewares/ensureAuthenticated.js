// const ensureAuthenticated = function (req, res, next) {
// if (req.user.roleId === 4) {
//   res.redirect('/errorPage')
// } else {
//   console.log("ies");

// }
//   // return req.isAuthenticated() ? next() : res.redirect("/login");
//   // return req.user. ? next() : res.redirect("/login");
// };

// module.exports = ensureAuthenticated;

module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.user.roleId === 4) {
      res.redirect("/error");
    } else {
      return next();
    }
  } else {
    req.session.redirectTo = req.query.redirectTo;
    res.redirect("/login");
  }
};
