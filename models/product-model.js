const fs = require('fs')
const path = require('path')
const rootDir = require('../helpers/path')

exports.Product = class Product {
	constructor(title, price, description, image, id) {
		this.id = id
		this.title = title
		this.price = price
		this.description = description
		this.image = image
	}
	save() {
		try {
			const data = fs.readFileSync(path.join(rootDir, 'database', 'product.json'))
			const products = JSON.parse(data)
			products.push(this)
			fs.writeFileSync(path.join(rootDir, 'database', 'product.json'), JSON.stringify(products))
		} catch (error) {
			const products = []
			products.push(this)
			fs.writeFileSync(path.join(rootDir, 'database', 'product.json'), JSON.stringify(products))
		}
	}

	static getAllProducts() {
		try {
			const data = fs.readFileSync(path.join(rootDir, 'database', 'product.json'))
			return JSON.parse(data)
		} catch (error) {}
	}

	static findById(id) {
		const products = this.getAllProducts()
		const product = products.find((prod) => prod.id === id)
		return product
	}

	static deleteById(id) {
		const products = this.getAllProducts()
		console.log(typeof id)
		console.log('products', products)
		const updatedProducts = products.filter((prod) => prod.id !== id)
		try {
			fs.writeFileSync(path.join(rootDir, 'database', 'product.json'), JSON.stringify(updatedProducts))
		} catch (error) {}
	}
}

