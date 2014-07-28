'use strict';

var express = require('express);
var app = express();
var morgan = require('morgan');

app.set('views', __dirname + '/views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/discography', function(req, res){
  res.render('discography');
});

app.get('/tourdates', function(req, res){
  res.render('tourdates');
});

app.listen(3000, function(){
  console.log('Express.js is listening... ');
});
