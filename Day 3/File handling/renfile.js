var fs = require('fs');
fs.rename('medha1.txt', 'pragya.txt', function(err){
    if (err) throw err;
    console.log(" FIle Renamed!!  ");

});
