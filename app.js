const path = require('path')
const express = require('express') //common js import
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug')

app.use('/admin', adminRoutes.router)
app.use('/shop', shopRoutes.router)

app.get('/', (req, res, next) => {
	console.log('home')
	res.send('<h1>Home Page</h1>')
})

app.use('', (req, res, next) => {
	res.status(404).send('<h1>Page not found!</h1>')
})

// const server = http.createServer((req, res) => {
// 	console.log('req url', req.url)
// 	console.log('req header', req.headers)
// 	console.log('req method', req.method)
// 	// process.exit()
// 	res.writeHead(200, { 'Content-Type': 'text/html' })

// 	if (req.url === '/products') {
// 		// return res.write(
// 		// 	`<html>
// 		//     <head>
// 		//       <title>Product Page</title>
// 		//     </head>
// 		//     <body>
// 		//       <h1>Product Content</h1>
// 		//     </body>
// 		//   </html>`
// 		// )
// 		// res.writeHead(302)
// 		// res.write
// 	}

// 	if (req.url === '/add-product' && req.method === 'POST') {
// 		let body = []
// 		req.on('data', (chunk) => {
// 			console.log('chunk', chunk)
// 			body.push(chunk)
// 		})
// 		req.on('end', () => {
// 			body = Buffer.concat(body).toString()
// 			// at this point, `body` has the entire request body stored in it as a string
// 			console.log('body', body)
// 			console.log('adsasd')
// 			console.log('12121')
// 		})
// 		return res.end()
// 	}
// 	res.write(
// 		`<html>
//       <head>
//         <title>Hello NodeJS Course</title>
//       </head>
//       <body>
//         <h1>Content Response From Home</h1>
//         <form action='/add-product' method='POST'>
//           <input type='text' name='name' />
//           <button type='submit'>Submit</button>
//         </form>
//       </body>
//     </html>`
// 	)
// })

app.listen(3000)

