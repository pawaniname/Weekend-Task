const express = require('express')
const app = express()
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


mongoose.connect(dbConfig.url, {
    useNewUrlParser:true
}).then(() => {
    console.log("Database Connected!")
}).catch((err) => {
    console.log("Failed to connect to Database",err)
    process.exit()
})



require('./app/routes/user.route')
require('./app/routes/product.route')

app.listen(8080, () => {
    console.log("Server is listening on PORT : 8080")
})