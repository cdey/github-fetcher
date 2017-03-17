var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var controller = require('./controller.js');
var connection = require('./db/index.js');
var models = require('./models.js');

// var dbConfig = require('./db-config.js');

var app = express();

app.use( bodyParser.json() );
app.use(express.static(__dirname + '/../client/dist'));

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'github'
// });

app.post('/repos/import', function (req, res) {
  var userName = req.body.term;
  controller.getUserRepos(userName, function(err, data) {
    if (err) {
      console.log('error! try again');
    } else {
      data.body.forEach((repo) => models.addRepo(repo));
    }
  });
});

app.get('/repos', function (req, res) {
  connection.query('SELECT * from repos', function(err, results, fields) {
    if (err) {
      console.log('error',err)
    }
    res.send(results);
  })
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

