const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = jwt.sign({ email: "triana2109@gmail.com", role: 1 }, "secret", (err, token) => {
    req.headers.authorization = token;
    console.log(token);
    return next();
  });
};
