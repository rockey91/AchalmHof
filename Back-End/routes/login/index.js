'use strict';
const routes = require('express').Router();
var global = require('../../global.js');

routes.use(bodyParser.json());
routes.use(function (req, res, next){
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

  console.log(req.body);

  knex.select('*')
  .from('users')
  .where('username', req.body.username)
  .timeout(10000, {cancel: true})
  .map(function (row) { return row; })
  .then(function(data = []) {

    global.sendResponse(req, res, {
      status: 200,
      data: data
    });

  });

});

module.exports = routes;
