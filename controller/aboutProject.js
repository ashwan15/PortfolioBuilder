const aboutProjects = require("../models/aboutProject");

/**
 *Get all entries  of  "aboutprojects"  from db.
 * Send all entries in the response with a status code of 200.
 * Send 500 and error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const getProjectDetail = async (req, res) => {
  try {
    const project = await aboutProjects.find({});
    res.status(200).json({ project });
    console.log(project);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

/**
 * Get a specific "aboutprojects" entry by ID.
 * Send 404 and error message if not found.
 * Send 500 and error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const getProjectDetailId = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const projectId = await aboutProjects.findOne({ _id: id });
    if (!projectId) {
      return res.status(404).json({ msg: `no user with the id:${projectId}` });
    }
    res.status(200).json(projectId);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: ` There is an error from catch block` });
  }
};

/**
 * Create a new "aboutprojects" entry.
 * Send the new entry in the response with a status code of 200.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const addAboutProject = async (req, res) => {
  try {
    const project = await aboutProjects.create(req.body);
    res.status(200).json({ project });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

/**
 * updates  an existing  entry in "aboutprojects".
 * Send the updated entry in the response with a status code of 200.
 * Send 404 and error message if not found.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const updateProjectDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const updateProjectDetail = req.body;
    const projectDetail = await aboutProjects.findOneAndUpdate(
      { _id: id },
      updateProjectDetail,
      { new: true, runValidators: true }
    );
    if (!projectDetail) {
      return res
        .status(404)
        .json({ msg: `no user with the id:${projectDetail}` });
    }
    res.status(200).json(projectDetail);
    console.log(projectDetail);
  } catch (err) {
    res.status(500).json({ msg: ` There is an error from catch block` });
  }
};

/**
 * deletes an existing  entry   in "aboutprojects".
 * Send the deleted entry in the response with a status code of 200.
 * Send 404 and error message if not found.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const deleteProjectDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const projectDetail = await aboutProjects.findOneAndDelete({ _id: id });
    if (!projectDetail) {
      return res.status(404).json({ msg: `no user with the id:${id}` });
    }
    res.status(200).json({ projectDetail });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: ` There is an error from catch block` });
  }
};

module.exports = {
  getProjectDetail,
  getProjectDetailId,
  addAboutProject,
  updateProjectDetails,
  deleteProjectDetails,
};
