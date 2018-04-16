var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = require('./config/database')
const helmet = require('helmet')
const fs = require('fs')


const http = require('http');

var indexRouter = require('./routes/index');

let port = 3000;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Connect to MongoDB
mongoose.connect(db.uri, db.options).then(
  () => {
    console.log('MongoDB connected.')
  },
  err => {
    console.error('MongoDB error.:' + err)
  }
)
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// Parse application/json
app.use(bodyParser.json())

// Minden kérés loggolása
app.use(logger('dev', {
  stream: fs.createWriteStream('./access.log', {
    flags: 'a'
  })
}))

// basic secure
app.use(helmet())


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Start Browser-Sync
//a views mappában lévő bárhol található.html fájlok változása esetén újratölti az oldalt
if (app.get('env') === 'development') {
  const browserSync = require('browser-sync')
  const config = {
    files: ['views/**/*.html'],
    logLevel: 'info',
    logSnippet: false,
    reloadDelay: 3000,
    reloadOnRestart: true
  }
  const bs = browserSync(config)
  app.use(require('connect-browser-sync')(bs))
}

app.listen('3003');

module.exports = app;