let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//DEPENDENCY INJECTION FOR HANDLING ALL THE ROUTE OF THE APPLICATION.
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');


let app = express();



//VIEW ENGINE SETUP USING EJS 
//NOTE __dirname IS A GLOBAL VARIABLE USED TO SPECIFY THE SYSTEM DIRECTORY YOU ARE IN 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//SETS UP THE LOGGER FOR DEV PARSES OUT EXPRESS JSON DATA USES COOKIE PARSER AND TIES IN THE PUBLIC DIRECTORY
//STRUCTURE FOR VIEWING ASSETS
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//*NOTE*
//HERE WE HAVE SET UP OUR APP TO ALSO CONSUME NODE MODULES TO EXTEND THE FUNCTIONALITY (BOOTSTRAP)
app.use(express.static(path.join(__dirname, 'node_modules')));
//*NOTE*

//ALL ROOT LEVEL ROUTES GO TO THE INDEX ROUTER FILE (./routes/index.js)
//ALL USER LEVEL ROUTES GO TO THE USER ROUTER FILE(./routes/users.js)
app.use('/', indexRouter);
app.use('/users', usersRouter);




//CUSTOM ERROR HANDLING! catch 404 and forward to error handler
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
