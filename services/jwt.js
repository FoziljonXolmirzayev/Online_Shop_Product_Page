const jwt = require("jsonwebtoken");

exports.generateJWT = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "24h",
  });
};

exports.decodeJWT = (token) => {
  return jwt.decode(token);
};
