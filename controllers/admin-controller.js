const path = require('path')
const { Product } = require('../models/product-model')
const rootDir = require('../helpers/path')

exports.getProducts = (req, res, next) => {
	Product.getAllProducts((products) => {
		res.render('admin-products.ejs', {
			prods: products,
			pageTitle: 'Product',
			page: 'products',
		})
	})
}

exports.addProduct = (req, res, next) => {
	const { title, price, description, image } = req.body
	const id = Math.random(0, 1)
	const newProduct = new Product(title, price, description, image, id)
	newProduct.save((products) => {
		console.log('products', products[0])
		res.redirect('/shop')
	})
	// products.push({ title, price, description, image })
}

exports.addProductView = (req, res) => {
	res.render(path.join(rootDir, '/', 'views', 'add-product.ejs'), { pageTitle: 'Add Product', page: 'products' })
}
exports.editProductView = (req, res) => {
	const { id } = req.params
	Product.findById(id, (products) => {
		res.render(path.join(rootDir, '/', 'views', 'edit-product.ejs'), {
			pageTitle: 'Edit Product',
			page: 'products',
			prod: products[0],
		})
	})
}

exports.deleteProduct = (req, res) => {
	const { id } = req.body
	Product.deleteById(id, (product) => {
		console.log('product deleted', product)
		res.redirect('/shop')
	})
}
exports.editProduct = (req, res) => {
	const { id } = req.body
	const updateTitle = req.body.title
	const updateDescription = req.body.description
	const updatePrice = req.body.price
	const updateImage = req.body.image
	Product.editProduct(id, updateTitle, updateDescription, updatePrice, updateImage, (product) => {
		console.log('product in admin', product)
		res.redirect('/admin/products')
	})
}

