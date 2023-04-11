//const express = require("express");
//import express from "express"
import { Router } from "express";

//const userController = require("../controller/user");

//Router of Each Page
/**const routerAboutMe = express.Router();
const routerProject = express.Router();
const routerContactMe = express.Router();
const routerAboutProject = express.Router();**/
const routerAboutMe = Router();
const routerProject = Router();
const routerContactMe = Router();
const routerAboutProject = Router();
//const routerUser = express.Router();
//const routerUserLogin = express.Router();

//Users Router
//routerUser.route("/").post(userController);

//AboutMe
/**import createAboutMe, {
  getAboutMe,
  getAboutMeId,
  updateAboutMe,
  deleteAboutMe,
} from "../controller/aboutme.js";**/
import {
  getAboutMe,
  getAboutMeId,
  createAboutMe,
  updateAboutMe,
  deleteAboutMe,
} from "../controller/aboutme.js";

//Projects
import {
  getProjects,
  getProjectId,
  updateProject,
  createProjects,
  deleteProject,
} from "../controller/projects.js";

//Contact page
import {
  getEmail,
  getEmailwithId,
  postEmail,
  updateEmail,
  deleteEmail,
} from "../controller/contact.js";

/**const {
  getAboutMe,
  getAboutMeId,
  createAboutMe,
  updateAboutMe,
  deleteAboutMe,
} = require("../controller/aboutme.js");**/
routerAboutMe.route("/").get(getAboutMe).post(createAboutMe);
routerAboutMe
  .route("/:id")
  .get(getAboutMeId)
  .patch(updateAboutMe)
  .delete(deleteAboutMe);

//Projects Page Route

/**const {
  getProjects,
  getProjectId,
  createProjects,
  updateProject,
  deleteProject,
} = require("../controller/projects");**/
routerProject.route("/").get(getProjects).post(createProjects);
routerProject
  .route("/:id")
  .get(getProjectId)
  .patch(updateProject)
  .delete(deleteProject);

//Contact Page Router

/**const {
  getEmail,
  getEmailwithId,
  postEmail,
  updateEmail,
  deleteEmail,
} = require("../controller/contact");**/
routerContactMe.route("/").get(getEmail).post(postEmail);
routerContactMe
  .route("/:id")
  .get(getEmailwithId)
  .patch(updateEmail)
  .delete(deleteEmail);

//  ProjectDetail Page Router

/**const {
  addAboutProject,
  getProjectDetail,
  getProjectDetailId,
  updateProjectDetails,
  deleteProjectDetails,
} = require("../controller/aboutProject");**/

//AboutProject page
import {
  addAboutProject,
  getProjectDetail,
  getProjectDetailId,
  updateProjectDetails,
  deleteProjectDetails,
} from "../controller/aboutProject.js";

routerAboutProject.route("/").get(getProjectDetail).post(addAboutProject);
routerAboutProject
  .route("/:id")
  .get(getProjectDetailId)
  .patch(updateProjectDetails)
  .delete(deleteProjectDetails);

//Exporting Module
export { routerAboutMe, routerProject, routerContactMe, routerAboutProject };
