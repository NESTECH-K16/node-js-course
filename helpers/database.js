const mysql = require('mysql2/promise')
const db = mysql.createPool({ host: 'localhost', user: 'root', database: 'node-complete', password: '270198aa@abc' })

module.exports = db

