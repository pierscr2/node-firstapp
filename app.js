//  OpenShift sample Node application
var express = require('express'),app     = express();


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', function (req, res) {
  res.end("mah");
});

app.get('/pagecount', function (req, res) {
  res.end('non è bello cio che bello, ma che bello che blelo che bello');
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});


app.listen(port, ip,function(){
    console.log('Server running on http://%s:%s', ip, port);
});


module.exports = app ;
