var createError = require('http-errors');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash');
var session = require('express-session');
var passport = require('passport');
var indexRouter = require('./routes/index');
var quotesRouter = require('./routes/quotes');
var usersRouter = require('./routes/users');
var viewHelper = require('./helpers/view_helper');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secretgoeshere'));
app.use(session({ cookie: { maxAge: 60000 },
  resave: false, 
  saveUninitialized: false}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

// ------------------ App-Resources Routing ---------------------- 
app.use('/', indexRouter);
app.use('/quotes', quotesRouter);

// app.use('/users', usersRouter);
// View Helpers
app.locals.msgType2AlertMap = viewHelper.message_alert_map;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  const env = process.env.NODE_ENV || 'development';
  res.locals.ENV = env;
  res.locals.ENV_DEVELOPMENT = env == 'development';
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
