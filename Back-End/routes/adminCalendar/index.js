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

// Get a admin calendar.
routes.get('/ah-api/getAdminCalendar', function (req, res) {

  // console.log(req.query);

  knex.select("*")
  .from("inquire_requests")
  .whereNotNull("appointment_time")
  .timeout(10000, {cancel: true})
  .map(function (row) { return row; })
  .then(function(reqsList = []){

    // console.log("Calendar list....");
    // console.log(reqsList);

    var dataList = [];

    reqsList.forEach(function(obj){
      var tempObj = {
        id: obj.id,
        title: obj.appointment_title,
        desc: obj.appointment_message,
        start: obj.appointment_time
      };
      dataList.push(tempObj);
    });

    global.sendResponse(req, res, {
      status: 200,
      data: dataList
    });

  })
  .catch(function (error) {
    console.log(error);
  });

});

// Update a admin calendar.
routes.put('/ah-api/updateAdminCalendar', function (req, res) {

  // console.log(req.body);
  req.body.last_updated_at = knex.fn.now();

  knex("admin_calendar")
  .update(req.body)
  .where("id", req.body.id)
  .then(function(response = 0){

    var status = req.body.status === 'admin_rejected' ? "rejected" : "accepted";
    var mailData = {
      'from' : 'AchalmOf-Notifications<kontakt@achalmhof.de>',
      'to' : "",
      'cc' : "",
      'subject': 'AchalmOf: Terminanfrage ist'+ status +'.',
      'html': 'Hallo <br> <br> Ihre Terminanfrage ist '+ status +'. <br> <br>  Grube<br>' + 'Entwicklungsteam'.link("https://achalmhof.de/")
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

// Delete a admin calendar.
routes.delete('/ah-api/deleteAdminCalendar', function (req, res) {

  // console.log(req.body);
  req.body.deleted_at = knex.fn.now();

  knex("admin_calendar")
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
