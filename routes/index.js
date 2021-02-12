const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

var apples = [];

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    var db = client.db('apple-db')
    db.collection('apples', (err, collection) => {
        collection.find().toArray((err, items) => {
            if (err) throw err;
            //console.log(items);
            router.get('/', function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
                res.json(items);
            });
            client.close;
        }); 
    });
});

console.log(apples);

module.exports = router;