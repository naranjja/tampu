const express = require('express')
const pug = require('pug')
const bodyParser = require('body-parser')
const join = require('path').join
const resolve = require('path').resolve

const app = express()
const port = 3000
const http = require('http').Server(app)

app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const CLIENT = join(resolve(__dirname, '..', 'client'))
app.use(express.static(CLIENT))

app.use('/components', express.static(join(resolve(__dirname, '..', 'node_modules', 'semantic-ui', 'dist'))))
app.use('/components', express.static(join(resolve(__dirname, '..', 'node_modules', 'jquery', 'dist'))))
app.use('/components', express.static(join(resolve(__dirname, '..', 'client', 'assets'))))

app.use('/scripts', express.static(join(resolve(__dirname, '..', 'client', 'scripts'))))

app.get('/', (req, res) => {
	res.render(join(CLIENT, 'views/landing'), { title: 'Bienvenido' })
})

app.get('/summary', (req, res) => {
	res.render(join(CLIENT, 'views/summary'), { title: 'Resumen' })
})

app.get('/manage-dishes', (req, res) => {
	res.render(join(CLIENT, 'views/manage-dishes'), { title: 'Gestionar platos' })
})

app.get('/manage-ingredients', (req, res) => {
	res.render(join(CLIENT, 'views/manage-ingredients'), { title: 'Gestionar ingredientes' })
})

app.get('/record-inflow', (req, res) => {
	res.render(join(CLIENT, 'views/record-inflow'), { title: 'Registrar ingresos' })
})

app.get('/record-outflow', (req, res) => {
	res.render(join(CLIENT, 'views/record-outflow'), { title: 'Registrar egresos' })
})

app.use('/api', require('./api'))

http.listen(port, () => console.log(`> Running on port ${port}`))
