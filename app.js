var http=require('http');
var console=require('console');
var so_api=require('os');
var url=require('url');
var filesys = require("fs");
var path=require('path');
var process=require('process');

var port = process.env.PORT || process.env.NODE5JS_SERVICE_PORT || 8090,
    ip   = process.env.IP   || process.env.HOSTNAME || '0.0.0.0';

function newHtmlLine(string){
  return '<div>'+string+'</div>';
}

http.createServer((req,res) => {
   var h=req.headers;
   console.log("fdasfasdfa----------->"+req.url);
   var ext=path.extname(req.url);
   console.log(ext);
   var urlParts = url.parse(req.url, true);
   var baseUrl='';
   if(req.url=='/'){
	urlParts.path='/index.html';
	ext='.html';
   }
   if(ext=='.html')
	baseUrl='/html';
   if(ext==''){
     console.log("ext!=''");
      //ritorna qualcosa
      res.write('<html><body>');

     console.log(h);
     var urlParts = url.parse(req.url, true);
     for(k in h){

         res.write(newHtmlLine(k+' -> '+h[k]));
     }
     for(var i=0;i<10;i++){
         res.write('')
     }

     res.write("url----> "+h.host+req.url);
     console.log(urlParts);
     res.write(newHtmlLine(urlParts.href));
     res.end('</body></html>');
   }else{
     console.log("pathfinder");
     var fullpath = __dirname+baseUrl+urlParts.path;
     console.log("fullpath: "+fullpath);
     filesys.readFile(fullpath,(err,data)=>{
       if(err) {
         res.writeHeader(404, {"Content-Type": "text/plain"});
         res.write('not found');
         res.end();
       }else{
         res.writeHeader(200);
         res.write(data);
         res.end();
      }
     })
   }

}).listen(port, ip, function(){
  console.log('la porta : '+port);
  console.log('l\'ip: '+ ip);
  console.log(process.env);
});
