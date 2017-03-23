var express = require('express');
var server = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var userRouter = require('./routers/user.router');
var postRouter = require('./routers/post.router');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(mongoURI);

//routes
server.use(userRouter);
server.use(postRouter);

server.listen(port, function(){
  console.log('Now listening on port', port);
});
