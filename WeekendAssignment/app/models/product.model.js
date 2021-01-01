const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name: String,
    category: String
})

module.exports = mongoose.model('Product', productSchema)