const express = require('express')
const router = express.Router()

module.exports = (app) => {
    const products = require('../controllers/product.controller.js')
    //To add Product
    app.post("/product/add",products.create)
    
    //To retrive all products
    app.get("/products",products.findAll)

    //To retrive product by id
    app.get("/products/:productId",products.findOne)

    //To Update Product
    app.put("/products/:productId",products.update)

    //To delete Product
    app.delete("/products/:productId",products.delete)
}