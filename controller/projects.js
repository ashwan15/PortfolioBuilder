const collectionProjects = require("../models/project");
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
    const projects = await collectionProjects.find({});
    res.status(200).json({ projects });
    console.log(projects);
  } catch (err) {
    res.status(500).json({ msg: err });
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

const createProjects = (req, res) => {
  collectionProjects
    .create(req.body)
    .then(() => {
      res.status(201).json(req.body);
    })
    .catch((err) => {
      res.status(500).json({ msg: err });
    });
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

const updateProject = (req, res) => {
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

module.exports = {
  getProjects,
  getProjectId,
  createProjects,
  updateProject,
  deleteProject,
};
