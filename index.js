var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

var port = process.env.PORT || 8080;

server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
})

server.listen(port, function(){
  console.log('Now listening on port', port);
});
