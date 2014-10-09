var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var Schema = mongoose.Schema;

var hash = function (pass) {
  return bcrypt.hashSync(pass, bcrypt.genSaltSync(10));
};

var usersSchema = new Schema({
  id:  Number,
  username: String,
  password: {type: String, set: hash},
  timestamp: {type: Date, default: Date.now }
});

var User = mongoose.model('Users', usersSchema);

module.exports = User;


//new Users({username:"username", password: "password"});
