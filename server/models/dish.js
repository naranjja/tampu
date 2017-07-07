const client = require('./../database').MongoClient
const conn = require('./../database').uri

module.exports = {
	findAll: (callback) => {
		client.connect(conn, (err, db) => {
			db.collection('dishes')
				.find({})
				.toArray((err, records) => {
					if (err) console.error(err)
					callback(null, records)
				})
		})
	},
	entradas: (callback) => {
		client.connect(conn, (err, db) => {
			db.collection('dishes')
				.find({type: 'entrada'})
				.toArray((err, records) => {
					if (err) console.error(err)
					callback(null, records)
				})
		})
	},
	segundos: (callback) => {
		client.connect(conn, (err, db) => {
			db.collection('dishes')
				.find({type: 'segundo'})
				.toArray((err, records) => {
					if (err) console.error(err)
					callback(null, records)
				})
		})
	},
	guarniciones: (callback) => {
		client.connect(conn, (err, db) => {
			db.collection('dishes')
				.find({type: 'guarnicion'})
				.toArray((err, records) => {
					if (err) console.error(err)
					callback(null, records)
				})
		})
	},
	postres: (callback) => {
		client.connect(conn, (err, db) => {
			db.collection('dishes')
				.find({type: 'postre'})
				.toArray((err, records) => {
					if (err) console.error(err)
					callback(null, records)
				})
		})
	},
	piqueos: (callback) => {
		client.connect(conn, (err, db) => {
			db.collection('dishes')
				.find({type: 'piqueo'})
				.toArray((err, records) => {
					if (err) console.error(err)
					callback(null, records)
				})
		})
	}
}
