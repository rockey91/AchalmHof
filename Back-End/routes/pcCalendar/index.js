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

// Add a pc calendar.
routes.post('/ah-api/addPCCalendar', function (req, res) {

  console.log(req.body);
  req.body.created_at = knex.fn.now();

  knex("pc_calendar")
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

// Get a pc calendar.
routes.get('/ah-api/getPCCalendar', function (req, res) {

  console.log(req.query);

  knex.select("*")
  .from("pc_calendar")
  .where('pc_user_id', req.query.pc_user_id)
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

// Update a pc calendar.
routes.put('/ah-api/updatePCCalendar', function (req, res) {

  console.log(req.body);
  req.body.last_updated_at = knex.fn.now();

  knex("pc_calendar")
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

// Delete a pc calendar.
routes.delete('/ah-api/deletePCCalendar', function (req, res) {

  console.log(req.body);
  req.body.deleted_at = knex.fn.now();

  knex("pc_calendar")
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
