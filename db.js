const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_DB_URI;
const client = new MongoClient(uri);

async function connectDb() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(process.env.DB_NAME);
        return db;
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;