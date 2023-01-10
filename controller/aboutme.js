//creating Collection name Username
const collectionAboutMe = require("../models/Aboutme");

/**
 *Get all  "About Me" entry.
 * Send all entries in the response with a status code of 200.
 * Send 500 and error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const getAboutMe = async (req, res) => {
  try {
    const aboutme = await collectionAboutMe.find({});
    res.status(200).json({ aboutme });
    console.log(aboutme);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

/**
 * Get a specific "About Me" entry by ID.
 * Send 404 and error message if not found.
 * Send 500 and error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const getAboutMeId = async (req, res) => {
  try {
    const aboutmeId = req.params.id;
    console.log(aboutmeId);
    const aboutme = await collectionAboutMe.findOne({ _id: aboutmeId });
    if (!aboutme) {
      return res.status(404).json({ msg: `no user with the id:${aboutmeId}` });
    }
    res.status(200).json(aboutme);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: ` There is an error from catch block` });
  }
};

/**
 * Create a new "About Me" entry.
 * Send the new entry in the response with a status code of 200.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const createAboutMe = (req, res) => {
  collectionAboutMe
    .create(req.body)
    .then(() => {
      res.status(200).json(req.body);
    })
    .catch((err) => {
      res.status(500).json({ msg: err });
    });
};

/**
 * updates  an existing  entry in "About Me".
 * Send the updated entry in the response with a status code of 200.
 * Send 404 and error message if not found.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const updateAboutMe = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedAboutMe = req.body;
    const aboutme = await collectionAboutMe.findOneAndUpdate(
      { _id: id },
      updatedAboutMe,
      { new: true, runValidators: true }
    );
    if (!aboutme) {
      return res.status(404).json({ msg: `no user with the id:${aboutme}` });
    }
    res.status(200).json(aboutme);
    console.log(aboutme);
  } catch (err) {
    res.status(500).json({ msg: ` There is an error from catch block` });
  }
};

/**
 * deletes an existing  entry   in "About Me".
 * Send the deleted entry in the response with a status code of 200.
 * Send 404 and error message if not found.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const deleteAboutMe = async (req, res) => {
  try {
    const id = req.params.id;
    const aboutme = await collectionAboutMe.findOneAndDelete({ _id: id });
    if (!aboutme) {
      return res.status(404).json({ msg: `no user with the id:${id}` });
    }
    res.status(200).json({ aboutme });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: ` There is an error from catch block` });
  }
};

module.exports = {
  getAboutMe,
  getAboutMeId,
  createAboutMe,
  updateAboutMe,
  deleteAboutMe,
};
