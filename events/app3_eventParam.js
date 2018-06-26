// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected(message1) {
   console.log(message1);
}

// Bind the connection event with the handler
eventEmitter.addListener('connection', connectHandler);
 
// send event to Event Looper => filter to handler
//emit(event, [arg1], [arg2], [...])
//lệnh này thực hiện luôn (ko có queue nào cả)
eventEmitter.emit('connection', 'ko co viẹc gi kho');  // 'connection' là id của event
eventEmitter.emit('connection', 'chi so long ko ben');
eventEmitter.emit('connection', 'message 3th');

//lệnh này print cuối cùng, chứng tỏ ko có queue nào cả.
console.log("Program Ended.");