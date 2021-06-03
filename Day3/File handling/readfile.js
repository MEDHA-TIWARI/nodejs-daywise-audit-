var fs = require('fs');
fs.readFile('medha1.txt',"utf-8", function(err,data){
    if (err) throw err;
    console.log(data);

});