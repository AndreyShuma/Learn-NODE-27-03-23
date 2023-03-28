const path = require('path');
const moment = require('moment');
const fs = require('fs');

fs.readFile('./myText.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);});

console.log("Hello Node!!!");
// require('./test.js');

// setInterval( () => console.log("Привіт!!!!"), 1500 );

console.log(moment().format());

// const str = path.join('./abc/123', '../ghi');
// console.log(str);


