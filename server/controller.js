var request = require ('request');


module.exports = {

  getUserRepos: function(username, callback) {

    var options = { method: 'GET',
      url: 'https://api.github.com/users/' + username + '/repos',
      headers: { 'postman-token': 'c1c0baa6-788e-f32d-5d1a-85d8b6edd84b',
       'cache-control': 'no-cache',
       authorization: 'Basic c2Ftem9sbDIyOm1heG1heG1heDIy',
       'User-Agent': username,
       'content-type': 'application/json' },
      body: { 'this is a': 'test' },
      json: true };


    request(options, function(err, res) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    });
  },

  

}
