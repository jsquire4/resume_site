var express = require("express");

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.send('Express Works');
});

app.listen(app.get('port'), function(){
  console.log('express started on port 3000, press CTRL-C to terminate');
});
module.exports = app;
