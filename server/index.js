var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var mysql = require('mysql');
// var dbConfig = require('./db-config.js');

var app = express();

app.use( bodyParser.json() );
app.use(express.static(__dirname + '/../client/dist'));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'github'
});

app.post('/repos/import', function (req, res) {
  // request('https://developer.github.com/v3/', function(error, response,body) {
  //   if (error) {
      
  //   }
    console.log('error', error)
  // });
});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

