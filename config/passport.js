//This is the configuration of the passport node module.

const passport = require('possport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');

passport.use(new LocalStrategy({
  usernameField: 'email'
}),
  function howWeAuth(username, password, done){
    User.findOne({email: username}, function(err, user){
      if(err){
        return done(err);
      }
      if (!user){ //if there is not a user with that email
        return done(null, false, {
          msg: 'User Not Found'
        });
      }
      if(!user.validPassword(password)){
        return done(null, false, {
          msg: 'Authentication Failed'
        });
      }
      return(null, user);
    });
  });
