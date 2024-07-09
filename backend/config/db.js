
import mongoose from 'mongoose';
// const config = require('../config/default.js');
import config from '../config/default.js'

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add any other options here as needed
    });

    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

// // const mongoose = require('mongoose');
// import mongoose from 'mongoose';

// // const config = require('config');
// import config from 'config/default.js';

// const db = config.get('mongoURI');


// const connectDB = async () => {
//   try {
//     mongoose.set('strictQuery', true);
//     await mongoose.connect(db);

//     console.log('MongoDB connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// // module.exports = connectDB;
// export default connectDB;

// sdp-project/backend/your-app-files.js

// sdp-project/backend/config/db.js


