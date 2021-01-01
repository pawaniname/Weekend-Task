const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    address: String,
    email: String
})

module.exports = mongoose.model('User', userSchema)