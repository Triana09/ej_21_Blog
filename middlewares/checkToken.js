const { expressjwt: checkJwt } = require("express-jwt");

module.exports = checkJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  getToken: function fromHeaderOrQuerystring(req) {
    if (req.headers.authorization) {
      return req.headers.authorization;
    }
    return null;
  },
});
