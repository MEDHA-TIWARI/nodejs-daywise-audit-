var http = require('http');
http.createServer(function(req,res){

    res.end(" Welcome to node js ");
}).listen(3000);
console.log(" Server has started ");