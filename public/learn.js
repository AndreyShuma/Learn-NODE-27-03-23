const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
// const test = require('./test.js');


const server = http.createServer( (req, res) => {
    console.log(__dirname);
    console.log("hello!!!");
    console.log('req', req.url);

    if (req.url === '/') {
        res.end("Home page");
    } else if (req.url === '/123') { 
        fs.readFile('./public/text.txt', 'utf8', function(err, data) {
            if (err) throw err;
            res.end(data);
        });    
    } else if (req.url === '/1') { 
        fs.readFile('./myText.txt', 'utf8', function(err, data) {
            if (err) throw err;
            res.end(data);
        });    
    } else if (req.url === '/100') { 
        fs.readFile('./public/modal/index.html', 'utf8', function(err, data) {
            if (err) throw err;
            res.end(data);
        });    
    } else if (req.url === '/style.css') { 
        fs.readFile('./public/modal/style/style.css', 'utf8', function(err, data) {
            if (err) throw err;
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });   
    } else if (req.url === '/javascript.js') { 
        fs.readFile('./public/modal/js/javascript.js', 'utf8', function(err, data) {
            if (err) throw err;
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });   
    } else {
        res.end("ERROR 404");
    }
});
server.listen(3000);

console.log("Сервер запущен");