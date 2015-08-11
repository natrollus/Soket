/**
 * Created by byram on 8/11/15.
 */

var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("selam naber la")
}).listen(1337,'127.0.0.1');
console.log("yürüyoo");