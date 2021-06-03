var fs = require('fs');
fs.open('medha1.txt', 'w', function(err, file){
    if (err) throw err;
    console.log("File open in write mode ");

});
