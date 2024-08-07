require('dotenv').config();
const { MongoClient } = require("mongodb");

let dbConnection;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const URI = `mongodb+srv://${username}:${password}@cluster0.c90bxqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(URI)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch(err => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};