const express = require('express');
const app = express();
const mongodb = require('mongodb');

const config = require('./db');
const client = mongodb.MongoClient;

client.connect(config.DB, function(err, db) {
  if (err) {
    console.log('database is not connected:', err);
  } else {
    console.log('database is connected!!');
  }
});

app.get('/', function(req, res) {
  res.json({ "hello": "world" });
});

app.listen(3000, function(){
  console.log('Your node.js server is runnign on PORT: 3000');
});