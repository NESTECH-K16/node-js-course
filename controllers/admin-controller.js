const path = require('path')
const { Product } = require('../models/product-model')
const rootDir = require('../helpers/path')

exports.getProducts = (req, res, next) => {
	const products = Product.getAllProducts()
	res.render('admin-products.ejs', {
		prods: products,
		pageTitle: 'Product',
		page: 'products',
	})
}

exports.addProduct = (req, res, next) => {
	const { title, price, description, image } = req.body
	const id = Math.random(0, 1)
	const newProduct = new Product(title, price, description, image, id)
	newProduct.save()
	// products.push({ title, price, description, image })
	res.redirect('/shop')
}

exports.addProductView = (req, res) => {
	res.render(path.join(rootDir, '/', 'views', 'add-product.ejs'), { pageTitle: 'Add Product', page: 'products' })
}

exports.deleteProduct = (req, res) => {
	const { id } = req.body
	Product.deleteById(+id)
	res.redirect('/shop')
}

