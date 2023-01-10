const mongoose = require("mongoose");

// Create the collection using the defined schema

const contactSchema = new mongoose.Schema({
  email: String,
});

// The collection will be named "contact"

const contactCollection = mongoose.model("contact", contactSchema);

module.exports = contactCollection;
