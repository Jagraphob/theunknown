const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  uuid: String,
  email: String,
  firstname: String,
  lastname: String,
  avatarUrl: String
})

module.exports = mongoose.model('user', userSchema)