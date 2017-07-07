const MongoClient = require('mongodb')
const settings = require('./../settings.json')
const uri = `mongodb://${settings.databaseHost}:${settings.databasePort}/${settings.databaseName}`

module.exports = { MongoClient,	uri }
