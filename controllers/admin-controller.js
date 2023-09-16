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

const getRandomId = (length) => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

exports.addProduct = (req, res, next) => {
  const { title, price, description, image } = req.body
  const id = getRandomId(8)
  const newProduct = new Product(title, price, description, image, id)
  newProduct.save()
  // products.push({ title, price, description, image })
  res.redirect('/shop')
}

exports.addProductView = (req, res) => {
  res.render(path.join(rootDir, '/', 'views', 'add-product.ejs'), {
    pageTitle: 'Add Product',
    page: 'products',
  })
}

exports.editProductView = (req, res) => {
  const { productId } = req.params
  const product = Product.findById(productId)
  res.render(path.join(rootDir, '/', 'views', 'edit-product.ejs'), {
    pageTitle: 'Edit Product',
    page: 'products',
    prod: product,
  })
}

exports.editProduct = (req, res) => {
  const { id, title, price, description, image } = req.body
  console.log('edit product', id, title, price, description, image)

  Product.editProduct(id, { id, title, price, description, image })
  res.redirect('/admin/products')
}

exports.deleteProduct = (req, res) => {
  const { id } = req.body
  Product.deleteById(id)
  res.redirect('/shop')
}
