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

  // console.log(req.body);
  //var hashPassword = saltHashPassword(req.body.password);
  knex.select('*')
  .from('users')
  .where('username', req.body.username)
  .timeout(10000, {cancel: true})
  .map(function (row) { return row; })
  .then(function(data = []) {
    // console.log('data =' + data);
    // var userResponse = data[0];
    // var hashedPassword = sha512(req.body.password, userResponse.passwordsalt);
    // if(userResponse == null){
    //   global.sendResponse(req, res, {
    //     status: 400,
    //   data: []
    //   });
    // }else if(hashedPassword.passwordHash == userResponse.password){
    //   global.sendResponse(req, res, {
    //     status: 200,
    //     data: data
    //   });
    // }

    knex.select("*")
    .from("users")
    .where('username', req.body.username)
    .timeout(10000, {cancel: true})
    .map(function (row) { return row; })
    .then(function(usersList = []){

      var authFailResponse = function(){
        global.sendResponse(req, res, {
          status: 201,
          data: {
            data: [],
            message: "Authentication failed. Invalid username/password."
          }
        });
      }

      if ( usersList.length ) {
        if ( usersList[0].password == req.body.password ) {
          global.sendResponse(req, res, {
            status: 200,
            data: {
              data: usersList,
              message: "Authentication successful"
            }
          });
        } else {
          authFailResponse();
        }
      } else {
        authFailResponse();
      }

    })
    .catch(function (error) {
      console.log(error);
    });

  })
  .catch(function (error) {
    console.log(error);
  });

});

// Add a user.
routes.post('/ah-api/addUser', function (req, res) {

  // console.log(req.body);

  req.body.created_at = knex.fn.now();
  var hashPwdData = saltHashPassword(req.body.password);
  req.body.password = hashPwdData.passwordHash;
  req.body.passwordsalt = hashPwdData.salt;

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

  // console.log(req.query);

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

  // console.log(req.body);
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

  // console.log(req.body);
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

/**
* generates random string of characters i.e salt
* @function
* @param {number} length - Length of the random string.
*/
var genRandomString = function(length){
  return crypto.randomBytes(Math.ceil(length/2))
  .toString('hex') /** convert to hexadecimal format */
  .slice(0,length);   /** return required number of characters */
};

/**
* hash password with sha512.
* @function
* @param {string} password - List of required fields.
* @param {string} salt - Data to be validated.
*/
var sha512 = function(password, salt){
  var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest('hex');
  return {
    salt:salt,
    passwordHash:value
  };
};

/**
* hash password with sha512 and salt.
* @function
* @param {string} password - List of required fields.
*/
var saltHashPassword =  function(userpassword) {
  var salt = genRandomString(16); /** Gives us salt of length 16 */
  var passwordData = sha512(userpassword, salt);
  return passwordData;
}

module.exports = routes;
