var http = require('http');
//import module from ./myfirstmodule.js
var dt = require('./myfirstmodule');

console.log("print tren man hinh console run: node test.js");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('body of http response');
}).listen(4200);