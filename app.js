var http = require('http')

http.createServer((req,res) => {
  console.log("waiting");
  res.end('hola');
}).listen(8080);
