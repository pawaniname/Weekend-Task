const express = require('express')
const router1 = express.Router()

module.exports = (app) => {
    const users = require('../controllers/user.controller.js')
    //To add Users
    app.post("/user/add",users.create)
    
    //To retrive all users
    app.get("/users",users.findAll)

    //To retrive user by id
    app.get("/users/:userId",users.findOne)

    //To Update User 
    app.put("/users/:userId",users.update)

    //To delete user 
    app.delete("/users/:userId",users.delete)
}