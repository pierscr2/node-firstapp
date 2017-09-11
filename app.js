var http = require('http')

http.createServer((req,res) => {
  console.log("waiting");
  res.end('hola');
}).listen(8080,'127.0.0.1',, function(){
  console.log('Io aspetto eh');
}););
