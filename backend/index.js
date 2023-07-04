//import connectDB from "../db/connection";

//const connectDB = require("../db/connection");
//require("dotenv").config();
import multer from "multer";

// Set up multer middleware to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import { config } from "dotenv";
config();

/**const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");**/
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

// Serve static files from the "uploads" directory
app.use("/uploads", express.static("uploads"));

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
//MIDDLEWARE
app.use(express.static("./public"));
app.use(express.json());
app.use(cors(corsOptions)); // Use this after the variable declaration

//const mainRouter = require("./routes/main");
import {
  routerAboutMe,
  routerProject,
  routerContactMe,
  routerAboutProject,
} from "./routes/routes.js";

/**const {
  routerAboutMe,
  routerProject,
  routerContactMe,
  routerAboutProject,
} = require("./routes/routes");**/

//const { notFound } = require("./middleware/notfound");
//const errorHandlerMiddleware = require("./middleware/error-handler");

//const userRoute = require("./routes/userRoutes");
import userRoute from "./routes/userRoutes.js";

//Root Routes for Routes in routes.js

app.use("/api/v1/aboutme", routerAboutMe);
app.use("/api/v1/projects", routerProject);
app.use("/api/v1/contact", routerContactMe);
app.use("/api/v1/aboutprojects", routerAboutProject);
app.use("/api/v1/register", userRoute);
app.use("/api/v1/login", userRoute);

//app.use("/api/v1/users", userRoute);
//app.use("/api/v1", mainRouter);
const PORT = process.env.PORT || 3001;

/**connectDB().then(() => {
  app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
});**/
//NOT FOUND ROUTE

//app.use(notFound);
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  function (err) {
    if (!err) {
      console.log("Database connected..");
    } else {
      console.log(err);
    }
  }
);
console.log(process.env.API_PORT);

if (process.env.API_PORT) {
  app.listen(
    process.env.API_PORT,
    console.log(
      `Server is listening on port number  ${process.env.API_PORT}...`
    )
  );
}

//module.exports = app;
export default app;
