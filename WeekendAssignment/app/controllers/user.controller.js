const User = require("../models/user.model.js")


exports.create = (req,res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "User details can not be empty"
        })
    }

    const user = new User({
        name: req.body.name || "Untitled User", 
        address: req.body.address,
        email: req.body.email
    })
    user.save()
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while creating the User."
        })
    })
}

exports.findAll = (req,res) => {
    User.find()
    .then(users => {
        res.send(users)
    }).catch(err => {
        res.send({message: err.message || "Error occured while retriving the data"}).status(500)
    })
}

exports.findOne = (req,res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user){
            return res.send({message: "No User contains at ID : "+ req.params.UserId}).status(404)
        }
        res.send(user)
    })
}

exports.update = (req,res) => {
    if(!req.body.content){
        return res.send({message: "User can not be empty"}).status(400)
    }
    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name || "Untitled User",
        address: req.body.address,
        email: req.body.email
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            })
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            })                
        }
        return res.status(500).send({
            message: "Error updating User with id " + req.params.usereId
        })
    })
}

exports.delete = (req,res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            })
        }
        res.send({message: "User deleted successfully!"})
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            })                
        }
        return res.status(500).send({
            message: "Could not delete User with id " + req.params.userId
        })
    })
}