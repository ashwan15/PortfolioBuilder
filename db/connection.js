/**async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
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

module.exports = { connectDB };**/
