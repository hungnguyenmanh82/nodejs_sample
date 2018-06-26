var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  //đọc hết file thì mới gọi callback function 1 lần duy nhất (ko gọi nhiều lần)  
  console.log('header')
  res.writeHead(200, {'Content-Type': 'text/html'});

  fs.readFile('index.html', function(err, data) { //callback gọi 1 lần duy nhất 
    if (err) {
      console.log(e);
      return;
    }

    console.log('onData()')
    res.write(data);
    res.end();
  });
}).listen(80);

 