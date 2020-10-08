const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/mySneakers", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    mongoose.connection.once("open", () =>
      console.log(
        `Successfully connected to DB: ${mongoose.connection.db.databaseName}`
      )
    );
  } catch {
    console.log("Couldn't connect to DB.");
  }
};

module.exports = connectDB;
