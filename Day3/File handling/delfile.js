var fs = require('fs');
fs.unlink('pragya.txt', function(err){
    if (err) throw err;
    console.log(' FIle Deleted!!  ');

});