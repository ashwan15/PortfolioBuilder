const express = require("express");

//Router of Each Page

const routerAboutMe = express.Router();
const routerProject = express.Router();
const routerContactMe = express.Router();
const routerAboutProject = express.Router();

const {
  getAboutMe,
  getAboutMeId,
  createAboutMe,
  updateAboutMe,
  deleteAboutMe,
} = require("../controller/aboutme.js");

//Aboutme Page Router

routerAboutMe.route("/").get(getAboutMe).post(createAboutMe);
routerAboutMe
  .route("/:id")
  .get(getAboutMeId)
  .patch(updateAboutMe)
  .delete(deleteAboutMe);

//Projects Page Route

const {
  getProjects,
  getProjectId,
  createProjects,
  updateProject,
  deleteProject,
} = require("../controller/projects");
routerProject.route("/").get(getProjects).post(createProjects);
routerProject
  .route("/:id")
  .get(getProjectId)
  .patch(updateProject)
  .delete(deleteProject);

//Contact Page Router

const {
  getEmail,
  getEmailwithId,
  postEmail,
  updateEmail,
  deleteEmail,
} = require("../controller/contact");
routerContactMe.route("/").get(getEmail).post(postEmail);
routerContactMe
  .route("/:id")
  .get(getEmailwithId)
  .patch(updateEmail)
  .delete(deleteEmail);

//  ProjectDetail Page Router

const {
  addAboutProject,
  getProjectDetail,
  getProjectDetailId,
  updateProjectDetails,
  deleteProjectDetails,
} = require("../controller/aboutProject");
routerAboutProject.route("/").get(getProjectDetail).post(addAboutProject);
routerAboutProject
  .route("/:id")
  .get(getProjectDetailId)
  .patch(updateProjectDetails)
  .delete(deleteProjectDetails);

module.exports = {
  routerAboutMe,
  routerProject,
  routerContactMe,
  routerAboutProject,
};
