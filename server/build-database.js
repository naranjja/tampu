const client = require('./database').MongoClient
const conn = require('./database').uri
const ingredients = require('./ingredients.json')

console.log(ingredients)

client.connect(conn, (err, db) => {
	db.collection('ingredients')
		.insertMany(ingredients, (err, result) => {
			console.log('inserted')
		})
})
