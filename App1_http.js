var http = require('http');  //import from Nodejs library

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('body of http response');
}).listen(4200);