const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

const dbName = "abc_corporation_survey";

module.exports = { client, dbName };
