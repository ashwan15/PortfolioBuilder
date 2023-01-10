const mongoose = require("mongoose");

// Create the collection using the defined schema

const aboutProjectsSchema = new mongoose.Schema({
  Techstack: {
    type: String,

    trim: true,
  },
  Features: {
    type: String,

    trim: true,
  },
});

// The collection will be named "aboutproject"

const aboutProjects = mongoose.model("aboutproject", aboutProjectsSchema);

module.exports = aboutProjects;
