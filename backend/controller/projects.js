//const collectionProjects = require("../models/project");
//const fs = require("fs");
import fs from "fs";

export {
  getProjects,
  getProjectId,
  createProjects,
  updateProject,
  deleteProject,
};
import collectionProjects from "../models/project.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Generate a unique file name
  },
});

//const upload = multer({ storage: storage });
const upload = multer({
  dest: "uploads/",
});
/**
 *Get all entries  of  "projects"  from db.
 * Send all entries in the response with a status code of 200.
 * Send 500 and error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const getProjects = async (req, res) => {
  try {
    //const projects = await collectionProjects.find({}).timeout(300000);
    //const projects = await collectionProjects.find({}).timeout(30000);
    const projects = await collectionProjects.find({}).maxTimeMS(30000);
    const projectData = projects.map((project) => ({
      id: project._id,
      title: project.title,
      description: project.description,
      image: project.image,
    }));
    res.status(200).json({ projects: projectData });
    console.log(projects);
  } catch (err) {
    console.log(err);
  }
};

/**
 * Get a specific "projects" entry by ID.
 * Send the  entry in the response with a status code of 200.
 * Send 404 and error message if not found.
 * Send 500 and error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const getProjectId = async (req, res) => {
  try {
    const projectId = req.params.id;
    console.log(projectId);
    const project = await collectionProjects.findOne({ _id: projectId });
    if (!project) {
      return res
        .status(404)
        .json({ msg: `no project with the id:${projectId}` });
    }
    res.status(200).json(project);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: ` There is an error from catch block` });
  }
};

/**
 * Create a new "projects" entry.
 * Send the new entry in the response with a status code of 200.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const createProjects = async (req, res) => {
  try {
    upload.single("image")(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: err.message });
      } else if (err) {
        return res.status(500).json({ message: err.message });
      }

      const { title, description } = req.body;
      //const imageUrl = req.file.filename;
      //  const imageUrl = `http://localhost:3001/uploads/${req.file.originalname}`;
      const image = {
        data: fs.readFileSync(req.file.path),
        contentType: req.file.mimetype,
      };
      const project = new collectionProjects({ title, description, image });
      await project.save();
      // Read the image file from the file system and encode it as a base64 string
      //const imageData = fs.readFileSync(req.file.path, { encoding: "base64" });

      res.json({
        _id: project._id,
        title: project.title,
        description: project.description,
        image: project.image,
      });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * updates  an existing  entry in "projects".
 * Send the updated entry in the response with a status code of 200.
 * Send 404 and error message if not found.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

/**const updateProject = (req, res) => {
  const { id: projectId } = req.params;
  collectionProjects
    .findOneAndUpdate({ _id: projectId }, req.body, {
      new: true,
    })
    .then((newProject) => {
      res.status(201).json(req.body);
    })
    .catch((err) => {
      return res.status(404).json({ msg: `No Email with id:${projectId}` });
    });
};**/

const updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const result = await collectionProjects.findByIdAndUpdate(
      projectId,
      updates,
      options
    );

    if (!result) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * deletes an existing  entry   in "projects".
 * Send the deleted entry in the response with a status code of 200.
 * Send 404 and error message if not found.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const deleteProject = async (req, res) => {
  try {
    const { id: projectId } = req.params;
    const project = await collectionProjects.findOneAndDelete({
      _id: projectId,
    });
    if (!project) {
      return res.status(404).json({ msg: `No task with id:${projectId}` });
    }
    res.status(200).json({ project });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
//Export default
//export default createProjects;

//Exporting module
/**export default {
  getProjects,
  getProjectId,
  updateProject,
  createProject: upload.single("image"),
  deleteProject,
};**/
