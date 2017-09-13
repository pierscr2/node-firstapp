var http = require('http')
var port = process.env.PORT||process.env.OPENSHIFT_NODEJS_PORT || 8080, ip=process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(port,ip, function(){
  console.log('Io aspetto eh');
  console.log('la porta è :'+port);
  console.log('ip :'+ip);
});
