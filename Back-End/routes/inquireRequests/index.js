'use strict';
const routes = require('express').Router();
var global = require('../../global.js');
const emailsender = require('../../emailsender.js');

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

// Add a inquire request.
routes.post('/ah-api/addInquireRequest', function (req, res) {

  req.body.created_at = knex.fn.now();

  knex("inquire_requests")
  .insert(req.body)
  .then(function(response = 0) {
    var mailData = {
      // 'from' : 'AchalmOf-Notifications<yogesh.shanmukhappa@affineanalytics.com>',
      'to' : "yogesh24.ds@gmail.com",
      'cc' : "",
      'subject': 'AchalmOf: Inquire Status',
      'html': 'Hi <br> <br> '+req.body.subject+'. <br> <br>  Regards<br>' + 'Development Team'.link("")
    }

    emailsender.sendEmail(mailData,{});

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

// Get a inquire request.
routes.get('/ah-api/getInquireRequest', function (req, res) {
  knex.raw(`SELECT
      ir.*, st.status_text, ven.*
  FROM
  achalm_hof.inquire_requests ir
  	LEFT JOIN
  achalm_hof.venues ven ON ir.venue_id = ven.id
  	LEFT JOIN
  achalm_hof.ah_status st ON ir.request_status = st.status_id`)
  .timeout(10000, {cancel: true})
  .map(function (row) { return row; })
  .then(function(inquireList = []){
    global.sendResponse(req, res, {
      status: 200,
      data: inquireList
    });

  })
  .catch(function (error) {
    console.log(error);
  });

});

// Update a inquire request.
routes.put('/ah-api/updateInquireRequest', function (req, res) {
  req.body.last_updated_at = knex.fn.now();
  var result = {};
  var updateData = {
    id: req.body.id,
    request_status: req.body.request_status,
    last_updated_by : req.body.username
  }
  knex.transaction(function (t) {
    knex("inquire_requests")
    .update(updateData)
    .where("id", req.body.id)
    .then(function(response = 0){
      var defPwd = req.body.mobile_number + "@achalm";
      return knex('users')
      .transacting(t)
      .insert({
        username: req.body.email_address,
        password: defPwd,
        role: 2,
        status: 1,
        created_at: knex.fn.now(),
        created_by: req.body.username
      }).
      then(function(response){
        console.log("Details saved to users table.");
        var mailData = {
          // 'from' : 'AchalmOf-Notifications<yogesh.shanmukhappa@affineanalytics.com>',
          'to' : req.body.email_address,
          'cc' : "",
          'subject': 'AchalmOf: Inquire Status Approved : User Credentials',
          'html': 'Hi <br> <br> Please find the below login credentials to access AchalmOf <br> <br> Username : '+req.body.email_address+'. <br> <br> Password : '+defPwd+'<br><br>  Regards<br>' + 'Development Team'.link("yogesh.shanmukhappa@affineanalytics.com")
        }
        emailsender.sendEmail(mailData,{});
      })
    })
    .then(t.commit)
    .catch(t.rollback)
  })
  .then(function (success) {
    // result.data = req.body;
    // result.result = 'success';
    // result.message = 'Inquire status updated successfully!';
    // res.setHeader('Content-Type', 'application/json');
    global.sendResponse(req, res, {
      status: 200,
      data: success
    });
  })
  .catch(function (error) {
    console.log(error);
  });
});

// Updating a requuest.
routes.put('/ah-api/updateRequest', function (req, res) {
  req.body.last_updated_at = knex.fn.now();
  var result = {};
  var updateData = req.body;

  req.body.last_updated_by = req.body.username;

  knex.transaction(function (t) {
    knex("inquire_requests")
    .update(updateData)
    .where("id", req.body.id)
    .then(function(response = 0){
      console.log("Request is updated.");
    })
    .then(t.commit)
    .catch(t.rollback)
  })
  .then(function (success) {
    global.sendResponse(req, res, {
      status: 200,
      data: success
    });
  })
  .catch(function (error) {
    console.log(error);
  });
});

module.exports = routes;
