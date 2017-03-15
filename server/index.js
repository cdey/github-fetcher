var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var dbConfig = require('./db-config.js');

var app = express();

app.use( bodyParser.json() );
app.use(express.static(__dirname + '/../client/dist'));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : dbConfig.user,
  password : dbConfig.password,
  database : 'github'
});

app.post('/repos/import', function (req, res) {
  // TODO
});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

