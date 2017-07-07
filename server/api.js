const router = require('express').Router()
const Employee = require('./models/employee')
const Dish = require('./models/dish')
const Ingredient = require('./models/ingredient')
const Sale = require('./models/sale')

router.get('/get-employees', (req, res) => {
	Employee.findAll((err, results) => {
		if (err) console.error(err)
		res.send(results)
	})
})

router.get('/get-dishes', (req, res) => {
	Dish.findAll((err, results) => {
		if (err) console.error(err)
		res.send(results)
	})
})

router.get('/entradas', (req, res) => {
	Dish.entradas((err, results) => {
		if (err) console.error(err)
		res.send(results)
	})
})

router.get('/segundos', (req, res) => {
	Dish.segundos((err, results) => {
		if (err) console.error(err)
		res.send(results)
	})
})

router.get('/postres', (req, res) => {
	Dish.postres((err, results) => {
		if (err) console.error(err)
		res.send(results)
	})
})

router.get('/guarniciones', (req, res) => {
	Dish.guarniciones((err, results) => {
		if (err) console.error(err)
		res.send(results)
	})
})

router.get('/piqueos', (req, res) => {
	Dish.piqueos((err, results) => {
		if (err) console.error(err)
		res.send(results)
	})
})

router.get('/save-order', (req, res) => {
	Sale.insert(req.query, (err, results) => {
		if (err) console.error(err)
		res.sendStatus(200)
	})
})

router.get('/get-ingredients', (req, res) => {
	Ingredient.findAll((err, results) => {
		if (err) console.error(err)
		res.send(results)
	})
})

router.get('/get-sales', (req, res) => {
	Sale.findAll((err, results) => {
		if (err) console.error(err)
		res.send(results)
	})
})

module.exports = router
