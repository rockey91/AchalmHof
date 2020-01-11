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

// Add a venue.
routes.post('/ah-api/addVenue', function (req, res) {

  // console.log(req.body);
  req.body.created_at = knex.fn.now();

  knex("venues")
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

// Get a venue.
routes.get('/ah-api/getVenue', function (req, res) {
  knex.select("*")
  .from("venues")
  .where('id', req.query.venueId)
  .timeout(10000, {cancel: true})
  .then(function(response){
    global.sendResponse(req, res, {
      status: 200,
      data: response
    });

  })
  .catch(function (error) {
    console.log(error);
  });

});

//Venue related event types, guest count


routes.get('/ah-api/getVenueRelatedData', function (req, res) {
  var sql =
      `SELECT * FROM achalm_hof.event_type where venue_id = '${req.query.venueId}';
       SELECT * FROM achalm_hof.guests_count_list where venue_id = '${req.query.venueId}';
      `;
      con.query(sql, function(err, rows, fields) {
        if (!err){
          var response = [], dataObj = {};
          if (rows.length != 0) {
            dataObj['event_types'] = rows[0];
            dataObj['guests_count'] = rows[1];
            response.push({'result' : 'success', 'data' : dataObj});
          } else {
            response.push({'result' : 'error', 'msg' : 'No Results Found'});
          }
          res.setHeader('Content-Type', 'application/json');
          // res.status(200).send(response);
          global.sendResponse(req, res, {
            status: 200,
            data: response
          });
        } else {
          res.status(400).send(err);
        }
      });

});

//Get all Venues
routes.get('/ah-api/getAllVenues', function (req, res) {
  knex.select("*")
  .from("venues")
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

// Update a venue.
routes.put('/ah-api/updateVenue', function (req, res) {

  // console.log(req.body);
  req.body.last_updated_at = knex.fn.now();

  knex("venues")
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

// Delete a venue.
routes.delete('/ah-api/deleteVenue', function (req, res) {

  // console.log(req.body);
  req.body.deleted_at = knex.fn.now();

  knex("venues")
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
