const { log } = require('console');
const http = require('http');
const

const server = http.createServer((req, res) => {
    console.log('Start server!!!')
    console.log(req.url);
    if(req.url === '/') {res.end('HOME PAGE')}
    else if(req.url === '/start') { res.end('Start page')}
    else {res.end('Error 404')};

});
server.listen(3000);

console.log('run server');