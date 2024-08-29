const express = require("express");
const {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
} = require("../modules/projects");
const projectRoute = express.Router();

projectRoute.get("/get", getProjects);
projectRoute.post("/create", createProject);
projectRoute.delete("/delete/:id", deleteProject);
projectRoute.put("/update/:id", updateProject);

module.exports = projectRoute;
