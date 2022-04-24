//Importing dependencies and url to connect to atlas
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//async method to connect to mongodb atlas that promises a response
const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      { useNewUrlParser: true }
    );

    console.log('MongoDB is Connected...Finally!');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;