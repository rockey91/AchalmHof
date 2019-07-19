const CryptoJS = require("crypto-js");
exports.CryptoJS = CryptoJS;

var achalmDatabBaseConnection = function() {
    express = require('express');
    mysql = require('mysql');
    bodyParser = require('body-parser');
    bcrypt = require('bcrypt');

    // local database viariable
    mysqlHost = '127.0.0.1';
    // knex environemt
    knex = require('knex')({
      client: 'mysql',
      connection: {
        host : mysqlHost,
        user : 'root',
        password : '@ff19E$P',
        database : 'dev_hris',
        timezone: 'IST'
      },
      pool: { min: 0, max: 7 }
    });

    // mysql environment
    con = mysql.createConnection({
        host : mysqlHost,
        user: "root",
        password: "@ff19E$P",
        multipleStatements: true,
        connectionLimit: 15,
        queueLimit: 50,
        acquireTimeout: 1000000
    });
};
exports.achalmDatabBaseConnection = achalmDatabBaseConnection;
