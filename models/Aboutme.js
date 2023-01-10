const mongoose = require("mongoose");

// Create the collection using the defined schema

const UsernameSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  paragraph: {
    type: String,
  },
});

// The collection will be named "Username"

const collectionAboutMe = mongoose.model("Username", UsernameSchema);

module.exports = collectionAboutMe;
