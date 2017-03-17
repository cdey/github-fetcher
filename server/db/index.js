var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'github'
});

// connection.connect();

// add a get function for user repos here


// export the function

module.exports = connection;