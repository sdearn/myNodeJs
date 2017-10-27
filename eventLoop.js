/**
 * Created by Administrator on 2017/10/26.
 */
var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log("connection succeeded");

    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.once('data_received', function() {
    console.log('Data reception is succeessful');
});

eventEmitter.emit('connection');

console.log('The program is finished');
