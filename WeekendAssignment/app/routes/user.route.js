const express = require('express')
const router1 = express.Router()


    const users = require('../controllers/user.controller.js')
    //To add Users
    router1.post("/user/add",users.create)
    
    //To retrive all users
    router1.get("/users",users.findAll)

    //To retrive user by id
    router1.get("/users/:userId",users.findOne)

    //To Update User 
    router1.put("/users/:userId",users.update)

    //To delete user 
    router1.delete("/users/:userId",users.delete)

    module.exports = router1