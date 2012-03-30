var http = require('http');
var options = {
  host: 'www.twitter.com',
  port: 80,
  path: '!#/search'
};

http.get(options, function(res) {
  console.log("Got response: " + res.body);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
