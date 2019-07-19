'use strict';
const routes = require('express').Router();
var access = require('../../var.js');
access.achalmDatabBaseConnection();

routes.use(bodyParser.json());
routes.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Set the content type header to the response object.
  res.setHeader('Content-Type', 'application/json');
  // Pass to next layer of middleware
  next();
});

// Authenticate the user.
routes.post('/authenticate', function (req, res) {
  // var date = new Date();
  // knex.select('role')
  // .from('users')
  // .where('username', username)
  // .timeout(10000, {cancel: true})
  // .map(function (row) { return row; })
  // .then(function(data = []) {
  //
  // });
});

module.exports = routes;
