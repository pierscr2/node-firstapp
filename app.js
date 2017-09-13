var http = require('http')
var port = process.env.PORT||process.env.OPENSHIFT_NODEJS_PORT || 8080, ip=process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


http.createServer((req,res) => {
  console.log("waiting");
  res.end('hola');
}).listen(8080,'127.0.0.1', function(){
  console.log('Io aspetto eh');
  console.log('la porta è :'+port);
  console.log('ip :'+ip);
});
