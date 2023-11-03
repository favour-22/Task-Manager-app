const mongoose = require('mongoose');
require('dotenv').config();

module.exports = function connectDb() {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connceted to the database');


  } catch (error) {
    console.log('Failed to connect to databse', error);

  }

};



