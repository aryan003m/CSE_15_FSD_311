// const http = require("http");
// const server = http.createServer((req,res) =>{
//     console.log(req.method);
//     res.end("Request received");

// });
// server.listen(3000);

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World');
    }
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});

