const client = require('./../database').MongoClient
const conn = require('./../database').uri

module.exports = {
	findAll: (callback) => {
		client.connect(conn, (err, db) => {
			db.collection('employees')
				.find({})
				.toArray((err, records) => {
					if (err) console.error(err)
					callback(null, records)
				})
		})
	}
}
