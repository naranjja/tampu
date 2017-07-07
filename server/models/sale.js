const client = require('./../database').MongoClient
const conn = require('./../database').uri

module.exports = {
	insert: (data, callback) => {
		client.connect(conn, (err, db) => {
			db.collection('sales')
				.insert({
					area: data.area,
					entradas: data.entradas,
					segundos: data.segundos,
					postres: data.postres,
					piqueos: data.piqueos,
					guarniciones: data.guarniciones
				}, (err, records) => {
					if (err) console.error(err)
					callback(null, records)
				})
		})
	},
	findAll: (callback) => {
		client.connect(conn, (err, db) => {
			db.collection('sales')
				.find({})
				.toArray((err, records) => {
					if (err) console.error(err)
					callback(null, records)
				})
		})
	},
}
