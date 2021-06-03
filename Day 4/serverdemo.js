var http = require('http');
http.createServer(function(req,res){
// using nodemon
    res.end(" Welcome to node js, MEDHA, PRAGYA, AANAL");
}).listen(3000);
console.log(" Server has started ");