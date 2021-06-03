var fs = require('fs');
fs.stat('medha1.txt', function(err,stats){
    if (err) {
        return console.error(err);
    } 

    console.log(stats);
    console.log("isFile ?" + stats.isFile());
    console.log("isDirectory ?" + stats.isDirectory());
});
