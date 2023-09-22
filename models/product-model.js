const fs = require('fs')
const path = require('path')
const rootDir = require('../helpers/path')
const db = require('./../helpers/database')
exports.Product = class Product {
	constructor(title, price, description, image, id) {
		this.id = id
		this.title = title
		this.price = price
		this.description = description
		this.image = image
	}
	save(cb) {
		const queryStr = 'INSERT INTO products(title, price, description, image) VALUES($1, $2, $3, $4) RETURNING *'
		const values = [this.title, this.price, this.description, this.image]
		db.query(queryStr, values)
			.then((result) => {
				const { rows } = result
				console.log(rows)
				return cb(rows)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	static getAllProducts(cb) {
		db.query(`SELECT * from products`)
			.then((result) => {
				console.log(result)
				const { rows } = result
				return cb(rows)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	static findById(id, cb) {
		db.query('SELECT * from "products" WHERE id = $1', [id]).then((result) => {
			return cb(result['rows'])
		})
	}

	static deleteById(id, cb) {
		const query = {
			text: 'DELETE FROM "products" WHERE id= $1',
			values: [id],
		}

		db.query(query)
			.then((result) => {
				cb(result.rows)
			})
			.catch((err) => console.log(err))
	}
	static editProduct(id, title, description, price, image, cb) {
		const query = {
			text: 'UPDATE "products" SET title = $1, description = $2, price = $3, image = $4 WHERE id = $5',
			values: [title, description, price, image, id],
		}

		db.query(query)
			.then((result) => {
				cb(result.rows)
			})
			.catch((err) => console.log(err))
	}
}

