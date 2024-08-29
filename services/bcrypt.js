const bcrypt = require("bcrypt");

exports.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};
exports.comparePassword = async function (password, passwordHash) {
  return await bcrypt.compare(password, passwordHash);
};
