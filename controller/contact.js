const asyncWrapper = require("../middleware/async");
const contactCollection = require("../models/contact");

/**
 *Get all entries  of  "contacts"  from db.
 * Send all entries in the response with a status code of 200.
 * Send 500 and error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const getEmail = async (req, res) => {
  try {
    const contact = await contactCollection.find({});
    res.status(200).json({ contact });
    console.log(contact);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

/**
 * Get a specific "contacts" entry by ID.
 * Send the  entry in the response with a status code of 200.
 * Send 404 and error message if not found.
 * Send 500 and error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const getEmailwithId = async (req, res) => {
  try {
    const emailId = req.params.id;
    console.log(emailId);
    const email = await contactCollection.findOne({ _id: emailId });
    if (!email) {
      return res.status(404).json({ msg: `no user with the id:${email}` });
    }
    res.status(200).json(email);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: ` There is an error from catch block` });
  }
};

/**
 * Create a new "contacts" entry.
 * Send the new entry in the response with a status code of 200.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const postEmail = async (req, res) => {
  try {
    const email = await contactCollection.create(req.body);
    res.status(200).json(email);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

/**
 * updates  an existing  entry in "contacts".
 * Send the updated entry in the response with a status code of 200.
 * Send 404 and error message if not found.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const updateEmail = async (req, res) => {
  try {
    const { id: emailId } = req.params;
    //const data = req.body;
    const email = await contactCollection.findOneAndUpdate(
      { _id: emailId },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({ newEmail });
  } catch (err) {
    return res.status(404).json({ msg: `No Email with id:${emailId}` });
  }
};

/**
 * deletes an existing  entry   in "contacts".
 * Send the deleted entry in the response with a status code of 200.
 * Send 404 and error message if not found.
 * Send a status code of 500 and the error message if there is an error.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */

const deleteEmail = async (req, res) => {
  try {
    const { id: emailId } = req.params;
    const email = await contactCollection.findOneAndDelete({ _id: emailId });
    if (!email) {
      return res.status(404).json({ msg: `No task with id:${emailId}` });
    }

    res.status(200).json({ email });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
module.exports = {
  getEmail,
  getEmailwithId,
  postEmail,
  updateEmail,
  deleteEmail,
};
