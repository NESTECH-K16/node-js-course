const express = require('express')
const path = require('path')
const adminData = require('./admin')

const router = express.Router()
const rootDir = require('../helpers/path')
const { getShop, getProductDetails } = require('../controllers/shop-controller')

router.get('/', getShop)
router.get('/products/:productId', getProductDetails)
exports.router = router

