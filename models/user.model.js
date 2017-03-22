var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

//create the model
var User = mongoose.model('User', userSchema);
module.exports = User;
