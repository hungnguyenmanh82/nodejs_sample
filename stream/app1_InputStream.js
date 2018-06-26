var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   console.log("onNext()")
});

readerStream.on('end',function(){
   console.log('onComplete()');
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

//hàm này gọi đầu tiên chứng tỏ là read file là asynchronous
console.log("Program Ended");