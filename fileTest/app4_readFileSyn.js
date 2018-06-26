var fs = require("fs");

var data = fs.readFileSync('index.html');

console.log(data.toString());

// print ra sau cùng => hàm trên là synchronous
console.log("Program Ended");