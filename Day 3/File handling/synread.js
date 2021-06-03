var fs = require('fs');

var data= fs.readFileSync("medha1.txt");
console.log("Synchronous Read: "+ data.toString());
    console.log("Program ended");
