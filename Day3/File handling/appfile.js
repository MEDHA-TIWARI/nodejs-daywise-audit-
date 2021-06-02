var fs = require('fs');
fs.appendFile('medha1.txt', '/n Welcome to the world of JS', function(err, ){
    if (err) throw err;
    console.log(" File content updated");

});