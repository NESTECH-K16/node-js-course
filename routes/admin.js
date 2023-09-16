const express = require('express')
const path = require('path')
const {
  getProducts,
  addProduct,
  addProductView,
  deleteProduct,
  editProductView,
  editProduct,
} = require('../controllers/admin-controller')

const router = express.Router()

router.get('/products', getProducts)
router.get('/add-product', addProductView)
router.post('/add-product', addProduct)
router.post('/products/delete/', deleteProduct)
// edit product view
router.get('/products/edit/:productId', editProductView)
// edit product
router.post('/edit-product', editProduct)

exports.router = router
