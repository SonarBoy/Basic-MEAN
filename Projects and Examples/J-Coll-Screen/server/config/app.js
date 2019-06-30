var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Install Modules for Authentication
var session = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var localStrategy = passportLocal.Strategy;
var flash = require('connect-flash');


//STEP 1: Inculde the Routes to be used for the function
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/usersRoute');
var celestialObjectRouter = require('../routes/celestialObjects');
var galaxyRouter = require('../routes/galaxyRouter');

//STEP 2: Here we inculde the mongoose model and its configuration file
var mongoose = require('mongoose');
var db = require('./db');

//STEP 3: Connect to the URI you specified in the db.js file
mongoose.connect(db.URI);

//STEP 4: Create a mongo Object and use the connection from the previously specified step
// The on function allows for error checking on the first connection try and will print out
// any errors to the console.
var MongoDB = mongoose.connection;
MongoDB.on('error',console.error.bind(console,"Connection Error: "));
MongoDB.once('open',() =>{
  console.log("Connected to MongoDB...");
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));


//setup for sessions
app.use(session({
  secret:"SomeSecret", //USE TO SIGN THE SESSION ID COOKIE
  saveUninitialize: true,
  resave: true
}));

// Initialise passport and flash
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

//passport user configuration

var userModel = require('../model/User');
var User = userModel.User; //Alias to the user model

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//STEP 5: List all the routers you are going to use in your web application.
app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/celestialObjects',celestialObjectRouter);
app.use('/galaxy',galaxyRouter);
app.use('/Users',usersRouter);

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
