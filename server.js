const http = require("node:http");

//console.log(http);

const server = http.createServer((req, res) => {
    if(req.url === '/getSecretData'){
        res.end('There is no secret data !!');
    }
    res.end('<h1>Hello, World!</h1>');

});

server.listen(8000);