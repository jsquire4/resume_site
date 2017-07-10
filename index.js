var express = require("express");
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);

app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.use(function(req, res){
  var reqUrl = req.url;
  var ipLocation = req.connection.remoteAddress;
  console.log("User at " + ipLocation + " tried to access " + req.url);
  res.type('text/html');
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.log(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('express started on port 3000, press CTRL-C to terminate');
});

module.exports = app;
