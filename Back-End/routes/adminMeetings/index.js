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

// Add a meeting request.
routes.post('/ah-api/addMeetingRequest', function (req, res) {

  console.log(req.body);
  req.body.created_at = knex.fn.now();

  knex("admin_meetings")
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

// Get a meeting request.
routes.get('/ah-api/getMeetingRequest', function (req, res) {

  console.log(req.query);

  knex.select("*")
  .from("admin_meetings")
  .timeout(10000, {cancel: true})
  .map(function (row) { return row; })
  .then(function(venuesList = []){

    global.sendResponse(req, res, {
      status: 200,
      data: venuesList
    });

  })
  .catch(function (error) {
    console.log(error);
  });

});

// Update a meeting request.
routes.put('/ah-api/updateMeetingRequest', function (req, res) {

  req.body.last_updated_at = knex.fn.now();

  knex("admin_meetings")
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

// Delete a inquire request.
routes.delete('/ah-api/deleteMeetingRequest', function (req, res) {

  console.log(req.body);
  req.body.deleted_at = knex.fn.now();

  knex("admin_meetings")
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
