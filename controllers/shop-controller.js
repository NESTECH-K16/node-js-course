const { Product } = require('../models')

exports.getShop = (req, res, next) => {
	const products = Product.getAllProducts((products) => {
		res.render('shop', { prods: products, pageTitle: 'Shop', page: 'shop' })
	})
}

exports.getProductDetails = (req, res) => {
	const { productId } = req.params
	const product = Product.findById(Number(productId))
	res.render('product-details', { pageTitle: 'ASds', page: 'products', prod: product })
}

