const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Work MY ПЕРШИЙServer!!!");
    console.log(req.url);
if(req.url === '/') {res.end('HOME Page')}
else if(req.url === '/cat') {res.end('Catalog')}
else if(req.url === '/product') {res.end('Product')}
else {res.end('Error 404')};

    // res.end(`Hello ${req.url}`);
});
server.listen(3000);

console.log("Test Server!!!");