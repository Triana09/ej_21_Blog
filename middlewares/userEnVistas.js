async function makeUserAvailableInViews(req, res, next) {
  res.locals.isLogin = req.isAuthenticated();
  res.locals.user = req.user;
  // console.log(res.locals);
  // console.log("guardado");
  next();
}
module.exports = makeUserAvailableInViews;
