// create a web server
// load the http module
var http = require('http');

// configure the server to respond with a Hello World message
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// listen for incoming requests on port 8080
server.listen(8080);

console.log('Server running at http://localhost:8080/');