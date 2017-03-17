var mysql = require('mysql');
var connection = require('./db/index.js');


module.exports = {
  addRepo: function(repo) {
    connection.query('INSERT INTO repos (repoId, name, htmlUrl) values (?, ?, ?)', [repo.id, repo.name, repo.html_url], function(err, results, fields) {
      if (err) {
        console.log('ERROR', err);
      } else {
        console.log('Success into DB');
      }
    });
    
  }

  
}









