const express = require("express");
const app = express();

const { connectDB } = require("./db/connection");
const dotenv = require("dotenv");
dotenv.config();

const {
  routerAboutMe,
  routerProject,
  routerContactMe,
  routerAboutProject,
} = require("./routes/routes");

const { notFound } = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/error-handler");

//MIDDLEWARE

app.use(express.json());

//Root Routes for Routes in routes.js

app.use("/api/v1/aboutme", routerAboutMe);
app.use("/api/v1/projects", routerProject);
app.use("/api/v1/contact", routerContactMe);
app.use("/api/v1/aboutprojects", routerAboutProject);

//NOT FOUND ROUTE

app.use(notFound);

const PORT = process.env.PORT || 3000;

connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
});
