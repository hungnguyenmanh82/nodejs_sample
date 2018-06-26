// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);  // 'connection' là id của Event
 

// send event to Event Looper => filter to handler
//emit(event, [arg1], [arg2], [...])
eventEmitter.emit('connection'); 
eventEmitter.emit('connection');
eventEmitter.emit('connection');

console.log("Program Ended.");