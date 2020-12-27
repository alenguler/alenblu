const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  "_id": Number,
  "username": String,
  "status": Boolean
});
module.exports = mongoose.model('User', UserSchema);