const { decodeJWT } = require("../services/jwt");

exports.authenticationChecker = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  const decodedToken = decodeJWT(token);
  next();
};
