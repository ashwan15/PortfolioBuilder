const mongoose = require("mongoose");

async function connectDB(url) {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Connected to the db");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connectDB };
