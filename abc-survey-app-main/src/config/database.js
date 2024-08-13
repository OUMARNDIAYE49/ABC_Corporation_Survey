const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'ABC_Corporation_Surveys';
let db;

const connectDB = async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
    console.log(`Connected to database: ${dbName}`);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };

connectDB()