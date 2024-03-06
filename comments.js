// create web server
// create a router
// create a route
// create a response
// send the response

var http = require('http');
var express = require('express');
var app = express();

var http = require('http');
var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, world!');
});

server.listen(3000, function(){
  console.log('Server is running on port 3000');
});