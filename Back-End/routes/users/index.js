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
routes.post('/ah-api/authenticate', function (req, res) {

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

  })
  .catch(function (error) {
    console.log(error);
  });

});

// Add a user.
routes.post('/ah-api/addUser', function (req, res) {

  console.log(req.body);
  // req.body = {
  //   "username": "test",
  //   "password": "test",
  //   "role": 1,
  //   "created_by": 1
  // }
  req.body.created_at = knex.fn.now();

  knex("users")
  .insert(req.body)
  .then(function(response = 0){

    global.sendResponse(req, res, {
      status: 200,
      data: {
        response: response
      }
    });

  })
  .catch(function (error) {
    console.log(error);
  });

});

// Get a user.
routes.get('/ah-api/getUser', function (req, res) {

  console.log(req.query);

  knex.select("*")
  .from("users")
  .where('username', req.query.username)
  .timeout(10000, {cancel: true})
  .map(function (row) { return row; })
  .then(function(usersList = []){

    global.sendResponse(req, res, {
      status: 200,
      data: usersList
    });

  })
  .catch(function (error) {
    console.log(error);
  });

});

// Update a user.
routes.put('/ah-api/updateUser', function (req, res) {

  console.log(req.body);
  req.body.last_updated_at = knex.fn.now();

  knex("users")
  .update(req.body)
  .where("id", req.body.id)
  .then(function(response = 0){

    global.sendResponse(req, res, {
      status: 200,
      data: {
        response: response
      }
    });

  })
  .catch(function (error) {
    console.log(error);
  });

});

// Delete a user.
routes.delete('/ah-api/deleteUser', function (req, res) {

  console.log(req.body);
  req.body.deleted_at = knex.fn.now();

  knex("users")
  .update(req.body)
  .where("id", req.body.id)
  .then(function(response = 0){

    global.sendResponse(req, res, {
      status: 200,
      data: {
        response: response
      }
    });

  })
  .catch(function (error) {
    console.log(error);
  });

});

module.exports = routes;
