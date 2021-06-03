// function
function greet(name, callback){
    console.log('Heyaa' + ' ' + 'name');
    callback();
}

// callback function
function callMe() {
    console.log("This i call back function");
}

// passing the function as parameter
greet('MEDHA', callMe);
