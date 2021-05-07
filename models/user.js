var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
//   username: {
//     type: String,
//     trim: true,
//     required: true,
//     max: 32,
//     unique: true,
//     index: true,
//     lowercase: true
// },
  name: {
    type: String,
    index:true,
    required: true
  },
  email: {
    type: String,
    required:true,
    unique:true
  },
  password: {
    type: String,
    required:true
  },
  profilePic: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.getUserByUsername = function(username, callback){
  var query = {username: username};
  User.findOne(query, callback);
}

module.exports.getUserByEmail = function(email, callback){
  var query = {email: email};
  User.findOne(query, callback);
}



module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) throw err;
    callback(null, isMatch);
  });
}