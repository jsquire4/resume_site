var express = require("express");
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.disable('x-powered-by');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

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
