//const mongoose = require("mongoose");
import mongoose from "mongoose";

// Create the collection using the defined schema

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [2000, "Title cannot be more than 2000 characters"],
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: [2000, "Description cannot be more than 2000 characters"],
  },
});

// The collection will be named "project"

const collectionProjects = mongoose.model("Project", projectSchema);

export default collectionProjects;
