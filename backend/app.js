var createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session')
const helmet = require('helmet');
const passport = require('passport')
const fs = require('fs');
const rfs = require('rotating-file-stream');
const cors = require('cors');
const http = require('http');

const db = require('./config/database/database.js');
const User = require('./model/user-model');
const userRouter = require('./routes/user-route');
const roleRouter = require('./routes/role-route');

const logDirectory = path.join(__dirname, 'log');
const port = process.env.PORT || 3002;

const app = express();

//connect to mongoDB
mongoose.connect(db.uri, db.options,
  () => {
    console.log('MongoDB connected.');
  },
  err => {
    console.error('MongoDB error: ' + err)
  })

//LOGGING
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
let accessLogStream = rfs('access.log', {
  interval: '1d',
  path: logDirectory,

})
app.use(morgan('combined', {
  stream: accessLogStream,
  skip: (req, res) => res.statusCode < 400
}));

//SECURITY
app.use(helmet());

//Enable CORS
app.use(cors());

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//Cookie handling
app.use(cookieParser());

//Session handling
app.use(session({
  secret: 'YOUR_SECRET_KEY',
  resave: true,
  saveUninitialized: true
}));

//Passport AUTH
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//User router
app.use('/', userRouter);
app.use('/role', roleRouter);

/////////////////////////
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
  res.json('error');
});
/*
// Start Browser-Sync
//a views mappában lévő bárhol található.html fájlok változása esetén újratölti az oldalt
if (app.get('env') === 'development') {
  const browserSync = require('browser-sync')
  const config = {
    files: ['views/**\/*.html'],
    logLevel: 'info',
    logSnippet: false,
    reloadDelay: 3000,
    reloadOnRestart: true
  }
  const bs = browserSync(config)
  app.use(require('connect-browser-sync')(bs))
}*/
/////////////////////////////////////////////

//Start server
app.listen(port);
console.log('Server running on port: ' + port);

module.exports = app;