// const mysql = require('mysql2/promise')
// const db = mysql.createPool({ host: 'localhost', user: 'root', database: 'node-complete', password: '270198aa@abc',  })

const { Pool } = require('pg')

// const db = new Client({
//   user: 'sgpostgres',
//   host: 'SG-PostgreNoSSL-14-pgsql-master.devservers.scalegrid.io',
//   database: 'postgres',
//   password: 'password',
//   port: 5432,
// })

const db = new Pool({
	host: 'localhost',
	user: 'user1',
	database: 'node-complete',
	password: '270198aa@abc',
})

module.exports = db

