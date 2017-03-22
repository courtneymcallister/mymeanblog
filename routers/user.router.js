var express = require('express');
var User = require('../models/user.model');
var userRouter = express.Router();

//POST /signup
userRouter.post('/signup', function(req, res){
  var newUser = new User(req.body);
  newUser.save(function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'successfully posted'
      });
    }
  });
});

//POST /login
userRouter.post('/login', function(req, res){
  var loginUser = new User(req.body);
  loginUser.save(function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'logged in a user!'
      });
    }
  });
});

//GET /users
userRouter.get('/users', function(req, res){
  User.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        users: documents
      });
    }
  });
});

//GET /users/:id
userRouter.get('/users/:id', function(req, res){
  User.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        users: documents
      });
    }
  });
});

//PUT /users/:id
userRouter.put('/users/:id', function(req, res){
  User.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'successfully updated'
      });
    }
  });
});

//DELETE /users/:id
userRouter.delete('/users/:id', function(req, res){
  User.remove({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'successfully deleted'
      });
    }
  });
});

module.exports = userRouter;
