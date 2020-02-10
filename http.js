const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-type":"text/html;charset=utf-8"});
    res.write('hello word');
    res.end('终止响应')
}).listen(8080)