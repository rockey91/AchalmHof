const CryptoJS = require("crypto-js");
exports.CryptoJS = CryptoJS;

express = require('express');
mysql = require('mysql');
bodyParser = require('body-parser');
bcrypt = require('bcrypt');

// local database viariable
mysqlHost = '127.0.0.1';
// knex environemt
knex = require('knex')({
  client: 'mysql',
  connection: {
    host : mysqlHost,
    user : 'root',
    password : 'test@123',
    database : 'achalm_hof',
    timezone: 'UTC'
  },
  pool: { min: 0, max: 7 }
});

// mysql environment
con = mysql.createConnection({
  host : mysqlHost,
  user: "root",
  password: "test@123",
  database : 'achalm_hof',
  multipleStatements: true,
  connectionLimit: 15,
  queueLimit: 50,
  acquireTimeout: 1000000
});


// Handle the respose being sent to API request.
var sendResponse = function( req, res, dataArgs ) {

  res.set({
    'Cache-Control' : 'no-cache, no-store, must-revalidate',
    'Pragma' : 'no-cache',
    'Expires' : '0'
  });

  res.status( parseInt(dataArgs.status) ).send({
    data : dataArgs.data
  });

}
exports.sendResponse = sendResponse;
