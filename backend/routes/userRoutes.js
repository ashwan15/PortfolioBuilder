/**const express = require("express");
const router = express.Router();
//const userController = require("../controller/user");
const authController = require("../controller/authController.js");

//const {validateRegisterInput,validateLoginInput}
const validateRegisterInput = require("../validation/registration");
const validateLoginInput = require("../validation/login");**/

import express from "express";
const router = express.Router();
//import userController from "../controller/user";
import authController from "../controller/authController.js";

//import { validateRegisterInput, validateLoginInput } from "../validation/registration";
import validateRegisterInput from "../validation/registration.js";
import validateLoginInput from "../validation/login.js";

// @route POST api/users/register
// @desc Register user
// @access Public
router.route("/").post(validateRegisterInput, authController.register);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.route("/").post(validateLoginInput, authController.login);

export default router;
