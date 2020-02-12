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

    // var content = `<tr><td>`+req.body.pc_name+ `</td> <td>`+req.body.event_type+`</td><td>` +req.body.event_date+ `</td> <td>`+req.body.guests_count+ `</td> <td>` +req.body.mobile_number+ `</td> <td> ` +req.body.email_address+ `</td> <td>` +req.body.subject+ `</td> <td>` +req.body.message+ `</td> </tr>`;

    var mailData = {
       'from' : 'AchalmOf-Notifications<kontakt@achalmhof.de>',
      'to' : "kontakt@achalmhof.de",
      'cc' : "n.fischer@achalmhof.de, s.hausch@achalm-lamm.de, yogesh24.ds@gmail.com, satish.g08@gmail.com, rockey91@gmail.com, nikhilsuryam@gmail.com",
      'subject': 'Achalm Hof: Status abfragen',
      'html': `Hallo <br><br>
                Eine neue Anfrage wird mit den folgenden Informationen empfangen,
               <br> <br>
               <table>
                <tr><th>Name</th><th>:</th><td>${req.body.pc_name}</td></tr>
                <tr><th>Art</th><th>:</th><td>${req.body.event_type}</td></tr>
                <tr><th>Datum</th><th>:</th><td>${req.body.event_date}</td></tr>
                <tr><th>Gäste</th><th>:</th><td>${req.body.guests_count}</td></tr>
                <tr><th> Mobiltelefon</th><th>:</th><td>${req.body.mobile_number}</td></tr>
                <tr><th>Email</th><th>:</th><td>${req.body.email_address}</td></tr>
                <tr><th>Gegenstand</th><th>:</th><td>${req.body.subject}</td></tr>
                <tr><th>Botschaft</th><th>:</th><td>${req.body.message}</td></tr>
               </<table>
               <br> <br>
               Grüße <br>
               Achalm Hof`
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
      ir.*,
      st.status_text,et.event_type_name as event_type_name, gcl.value as guest_count_list,
      ven.id AS ven_id, ven.name, ven.address, ven.location_link
  FROM
  achalm_hof.inquire_requests ir
  	LEFT JOIN
  achalm_hof.venues ven ON ir.venue_id = ven.id
  	LEFT JOIN
  achalm_hof.ah_status st ON ir.request_status = st.status_id
    LEFT JOIN
 achalm_hof.event_type et ON ir.event_type = et.event_type_id
    LEFT JOIN
    achalm_hof.guests_count_list gcl ON ir.guests_count = gcl.id
 order by id DESC;`)
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

  var reqId = req.body.id;
  if ( updateData.request_status == 2 ) {
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
          console.log(`Inquire request with id ${reqId} is accepted.`);
          var mailData = {
            'from' : 'AchalmOf-Notifications<kontakt@achalmhof.de>',
            'to' : req.body.email_address,
            'cc' : "",
            'subject': 'AchalmOf: Status anfragen genehmigt: Benutzeranmeldeinformationen',
            'html': 'Hallo <br> <br> Hier finden Sie die folgenden Anmeldeinformationen für den Zugriff AchalmOf <br> <br> Nutzername : '+req.body.email_address+'. <br> <br> Passwort : '+defPwd+'<br><br>  Grüße<br>' + 'Entwicklungsteam'.link("https://achalmhof.de/")
          }
          emailsender.sendEmail(mailData,{});
        })
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
  } else {
    knex.transaction(function (t) {
      knex("inquire_requests")
      .update(updateData)
      .where("id", req.body.id)
      .then(function(response = 0){

        console.log(`Inquire request with id ${reqId} is rejected`);

        var mailData = {
          // 'from' : 'AchalmOf-Notifications<yogesh.shanmukhappa@affineanalytics.com>',
          'to' : req.body.email_address,
          'cc' : "",
          'subject': 'AchalmOf: Ihre Anfrage wird abgelehnt.',
          'html': 'Hallo <br> <br> Es tut uns leid, Ihnen mitteilen zu müssen, dass Ihre Anfrage abgelehnt wurde. <br> <br> <br>  Grube<br>' + 'Entwicklungsteam'.link("https://achalmhof.de/")
        }
        emailsender.sendEmail(mailData,{});
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
  }

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
