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

app.listen(3000);

console.log('lol its working, date: ' + new Date());