const mongoose = require('mongoose');

const config = require('./config');

const mongoConnection = async () => {
  await mongoose.connect(config.mongoose.url, config.mongoose.options);
  return mongoose.connection;
};
module.exports = { mongoConnection };
