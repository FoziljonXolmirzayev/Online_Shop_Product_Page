const express = require("express");
const {
  createProduct,
  getFullPageInfo,
  deleteProduct,
  updateProduct,
  getProduct,
} = require("../modules/products");

const mainRoute = express.Router();

mainRoute.get("/getInfo", getFullPageInfo);
mainRoute.get("/:id", getProduct);
mainRoute.post("/create", createProduct);
mainRoute.put("/update/:id", updateProduct);
mainRoute.delete("/delete", deleteProduct);

module.exports = mainRoute;
