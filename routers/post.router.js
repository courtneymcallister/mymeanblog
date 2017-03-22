var express = require('express');
var Post = require('../models/post.model');
var postRouter = express.Router();

//GET /posts
postRouter.get('/posts', function(req, res){
  Post.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        posts: documents
      });
    }
  });
});

//GET /posts/:id
postRouter.get('/posts/:id', function(req, res){
  Post.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        posts: documents
      });
    }
  });
});

//POST /posts
postRouter.post('/posts', function(req, res){
  var blogPost = new Post(req.body);
  blogPost.save(function(err, document){
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

//PUT /posts/:id
postRouter.put('/posts/:id', function(req, res){
  Post.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated'
      });
    }
  });
});

//DELETE /posts/:id
postRouter.delete('/posts/:id', function(req, res){
  Post.remove({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted'
      });
    }
  });
});

module.exports = postRouter;
