const express = require('express')
const router = express.Router()


    const products = require('../controllers/product.controller.js')
    //To add Product
    router.post("/product/add",products.create)
    
    //To retrive all products
    router.get("/products",products.findAll)

    //To retrive product by id
    router.get("/products/:productId",products.findOne)

    //To Update Product
    router.put("/products/:productId",products.update)

    //To delete Product
    router.delete("/products/:productId",products.delete)

    module.exports = router