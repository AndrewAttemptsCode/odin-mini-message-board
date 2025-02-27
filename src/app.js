const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRouter');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', indexRouter);

module.exports = app;