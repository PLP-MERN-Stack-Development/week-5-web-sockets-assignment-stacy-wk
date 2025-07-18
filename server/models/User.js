const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  socketId: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
