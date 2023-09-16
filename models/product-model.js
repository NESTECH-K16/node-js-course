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
      const data = fs.readFileSync(
        path.join(rootDir, 'database', 'product.json')
      )
      const products = JSON.parse(data)
      products.push(this)
      fs.writeFileSync(
        path.join(rootDir, 'database', 'product.json'),
        JSON.stringify(products)
      )
    } catch (error) {
      const products = []
      products.push(this)
      fs.writeFileSync(
        path.join(rootDir, 'database', 'product.json'),
        JSON.stringify(products)
      )
    }
  }

  static getAllProducts() {
    try {
      const data = fs.readFileSync(
        path.join(rootDir, 'database', 'product.json')
      )
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
      fs.writeFileSync(
        path.join(rootDir, 'database', 'product.json'),
        JSON.stringify(updatedProducts)
      )
    } catch (error) {}
  }

  static editProduct(id, updatedProperties) {
    const products = this.getAllProducts()
    // Find the product with the given ID
    const index = products.findIndex((prod) => prod.id === id)

    // Check if the product exists
    if (index !== -1) {
      // Update the properties of the product
      products[index] = { ...updatedProperties }
      console.log('Modified Product:', products)
      try {
        fs.writeFileSync(
          path.join(rootDir, 'database', 'product.json'),
          JSON.stringify(products)
        )
      } catch (error) {}
    } else {
      console.log('Product not found!')
    }
  }
}
