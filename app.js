const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index.js');
const { appendFileSync } = require('fs');

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use('/', indexRouter);

let response;

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    var db = client.db('apple-db')
    db.collection('apples', (err, collection) => {
        collection.find().toArray((err, items) => {
            if (err) throw err;
            response = items;
            client.close;
        }); 
    });
});

console.log('lol its working date: ' + new Date());