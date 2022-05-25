const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = jwt.sign(
    { email: res.locals.user.email, role: res.locals.user.roleId },
    process.env.JWT_SECRET,
    (err, token) => {
      req.headers.authorization = token;
      return next();
    },
  );
};
