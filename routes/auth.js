const express = require("express");
const { signUp, signIn } = require("../modules/auth");
const authRoutes = express.Router();

authRoutes.post("/sign-up", signUp);
authRoutes.post("/signIn", signIn);

module.exports = authRoutes;
