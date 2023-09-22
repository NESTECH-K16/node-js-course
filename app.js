const path = require('path')
const express = require('express') //common js import
const { engine } = require('express-handlebars')

const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const db = require('./helpers/database')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: false }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/admin', adminRoutes.router)
app.use('/shop', shopRoutes.router)

app.get('/', (req, res, next) => {
	console.log('home')
	res.send('<h1>Home Page</h1>')
})

app.use('', (req, res, next) => {
	res.status(404).send('<h1>Page not found!</h1>')
})

app.listen(3000)

