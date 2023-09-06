console.log('Hello Nodejs application!!!')
const http = require('http')

const reqHandler = (req, res) => {}
const server = http.createServer((req, res) => {
	console.log('req url', req.url)
	console.log('req header', req.headers)
	console.log('req method', req.method)
	// process.exit()
	res.writeHead(200, { 'Content-Type': 'text/html' })

	if (req.url === '/products') {
		// return res.write(
		// 	`<html>
		//     <head>
		//       <title>Product Page</title>
		//     </head>
		//     <body>
		//       <h1>Product Content</h1>
		//     </body>
		//   </html>`
		// )
		// res.writeHead(302)
		// res.write
	}

	if (req.url === '/add-product' && req.method === 'POST') {
		let body = []
		req.on('data', (chunk) => {
			console.log('chunk', chunk)
			body.push(chunk)
		})
		req.on('end', () => {
			body = Buffer.concat(body).toString()
			// at this point, `body` has the entire request body stored in it as a string
			console.log('body', body)
			console.log('adsasd')
			console.log('12121')
		})
	}
	res.write(
		`<html>
      <head>
        <title>Hello NodeJS Course</title>
      </head>
      <body>
        <h1>Content Response From Home</h1>
        <form action='/add-product' method='POST'>
          <input type='text' name='name' />
          <button type='submit'>Submit</button>
        </form>
      </body>
    </html>`
	)
})

server.listen(3000, '127.0.0.1')

