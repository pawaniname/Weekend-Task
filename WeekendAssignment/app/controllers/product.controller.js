const Product = require("../models/product.model.js")

exports.create = (req,res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Product Product can not be empty"
        })
    }

    const product = new Product({
        name: req.body.name || "Untitled", 
        category: req.body.category
    })

    product.save()
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while adding new product."
        })
    })
}

exports.findAll = (req,res) => {
    Product.find()
    .then(products => {
        res.send(products)
    }).catch(err => {
        res.send({message: err.message || "Error occured while retriving the data"}).status(500)
    })
}

exports.findOne = (req,res) => {
    Product.findById(req.params.productId)
    .then(product => {
        if(!product){
            return res.send({message: "No product contains at ID : "+ req.params.productId}).status(404)
        }
        res.send(product)
    })
}

exports.update = (req,res) => {
    if(!req.body){
        return res.send({message: "product can not be empty"}).status(400)
    }
    Product.findByIdAndUpdate(req.params.productId, {
        name: req.body.name || "Untitled",
        category: req.body.category
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            })
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            })                
        }
        return res.status(500).send({
            message: "Error updating Product with id " + req.params.productId
        })
    })
}

exports.delete = (req,res) => {
    Product.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            })
        }
        res.send({message: "Product deleted successfully!"})
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            })                
        }
        return res.status(500).send({
            message: "Could not delete Product with id " + req.params.productId
        })
    })
}