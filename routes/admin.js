const express = require('express')
const path = require('path')
const rootDir = require('../helpers/path')

const router = express.Router()
let products = []

router.get('/product', (req, res, next) => {
	// 	res.send(`<html>
	// 	<head>
	// 		<title>Hello NodeJS Course</title>
	// 	</head>
	// 	<body>
	// 		<form action='/add-product' method='POST'>
	// 			<input type='text' name='name' />
	// 			<button type='submit'>Submit</button>
	// 		</form>
	// 	</body>
	// </html>`)
	res.render(path.join(rootDir, '/', 'views', 'product.pug'))
})

router.post('/add-product', (req, res, next) => {
	const body = req.body
	const { name } = req.body
	products.push({ title: name })
	res.redirect('/shop')
})

exports.router = router
exports.products = products

