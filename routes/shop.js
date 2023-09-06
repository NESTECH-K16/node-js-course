const express = require('express')
const path = require('path')
const adminData = require('./admin')

const router = express.Router()
const rootDir = require('../helpers/path')

router.get('/', (req, res, next) => {
	console.log('on products', adminData.products)
	// res.send('<h1>Products Page</h1>')
	res.render('shop', { prods: adminData.products })
})

exports.router = router

