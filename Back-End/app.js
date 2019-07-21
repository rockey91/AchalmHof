'use strict';
// Bring in our dependencies
var app = require('express')();
var helmet = require('helmet');
var compression = require('compression');
var http = require('http');
var https = require('https');
var fs = require('fs');
var path = require('path');
var global = require('./global.js');
var usersRoutes = require('./routes/users');
var venuesRoutes = require('./routes/venues');
var inqReqsRoutes = require('./routes/inquireRequests');
var admCalRoutes = require('./routes/adminCalendar');
var pcCalRoutes = require('./routes/pcCalendar');

require('console-stamp')(console, '[yyyy-mm-dd HH:MM:ss.l]');

app.use(helmet());
app.use(compression());
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: false}));
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

//  Connect all our routes to our application
app.use('/', usersRoutes);
app.use('/', venuesRoutes);
app.use('/', inqReqsRoutes);
app.use('/', admCalRoutes);
app.use('/', pcCalRoutes);


/* Below block of code for starting API */
let nowDateTime = new Date();
http.createServer(app).listen(4100, function() {
  console.log(`App listening with http on port 3100. Started at ${nowDateTime}`);
});
/* Above block of code for starting API */
