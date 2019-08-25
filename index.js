const express = require('express')
const path = require('path')
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000

var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.post('/login', jsonParser, function (req, res) {
 res.send('welcome, ' + req.body.username + 2 + 2);
req.end();
})
/*
// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + JSON.stringify(req.body.username))
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
})
*/
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
