const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'Medha1'), (err) => {
    if (err){
        return console.error(err);
    }
    console.log('Directory created successfully!!!!');
});
