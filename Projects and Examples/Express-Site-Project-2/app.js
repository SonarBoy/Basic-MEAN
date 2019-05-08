var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Database setup
var mongoose = require('mongoose');

//Database configuration
var db = require('./config/db');

//Connecting mongoose to the local database
mongoose.connect(db.URI);

//Listening for errors and connection to server
var MongoDB = mongoose.connection;
MongoDB.on('error',console.error.bind(console,"Connection Error: "));
MongoDB.once('open',() =>{
  console.log("Connected to MongoDB...");
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var vitaminRouter = require('./routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Include to use nodemoudles on path
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//Mongo using the contact router to retrieve 
//Vitamin list
app.use('/vitamin-list',vitaminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
