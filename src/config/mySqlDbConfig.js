const mysql = require('mysql2');
const config = require('./config');

const dbConnection = mysql.createPool(config.mySql);

module.exports = { dbConnection };
