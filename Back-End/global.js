const CryptoJS = require("crypto-js");
exports.CryptoJS = CryptoJS;

express = require('express');
mysql = require('mysql');
bodyParser = require('body-parser');
bcrypt = require('bcrypt');
crypto = require('crypto');

// local database viariable
mysqlHost = '127.0.0.1';
// knex environemt
knex = require('knex')({
  client: 'mysql',
  connection: {
    host : mysqlHost,
    user : 'root',
    password : '@ff19E$P',
    database : 'achalm_hof',
    timezone: 'UTC'
  },
  pool: { min: 0, max: 7 }
});

// mysql environment
con = mysql.createConnection({
  host : mysqlHost,
  user: "root",
  password: "@ff19E$P",
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


// Check the data to be automated automatically.
var checkData = function(){
  knex.select("*")
  .from("inquire_requests")
  .timeout(10000, {cancel: true})
  .map(function (row) { return row; })
  .then(function(inquireList = []){

    if( inquireList.length ) {
      inquireList.forEach(function(obj){


        if( obj.appointment_time !== null ) {
          var appEndTime = new Date(obj.appointment_time).getTime() + ( 30 * 1000 );
          var nowTime = new Date().getTime();

          // console.log( obj.appointment_time );
          // console.log( appEndTime );
          // console.log( nowTime );

          if ( nowTime >= appEndTime && ( obj.request_status === 5 ) ) {
            obj.request_status = 7;
            knex("inquire_requests")
            .update(obj)
            .where("id", obj.id)
            .then(function(response = 0){
              console.log("Auto updated the below object.");
              console.log(obj);
            })
            .then(t.commit)
            .catch(t.rollback);
          }
        }

      });
    }

  })
}
exports.checkData = checkData;
