var fs = require('fs');
fs.writeFile('medha1.txt', 'Be KIND and Helpful', function(err){
    if (err) throw err;
    console.log(" FIle created!!  ");

});