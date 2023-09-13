const express = require('express')
const path = require('path')
const { getProducts, addProduct, addProductView, deleteProduct } = require('../controllers/admin-controller')

const router = express.Router()

router.get('/products', getProducts)
router.get('/add-product', addProductView)
router.post('/add-product', addProduct)
router.post('/products/delete/', deleteProduct)

exports.router = router

