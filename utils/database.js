/**
 * Connect to our database and output some helpful logging.
 *
 * @module utils/database
 */
const databaseUri = require('../config/database');
const mongoose = require('mongoose');

module.exports = function () {

  mongoose.connect(databaseUri);

  // When successfully connected
  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + databaseUri);
  });

  // If the connection throws an error
  mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });

};
