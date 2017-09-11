var http = require('http')

http.createServer((req,res) => {
  res.end('hola');
}).listen(8080);
