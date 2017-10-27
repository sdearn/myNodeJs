/**
 * Created by Administrator on 2017/10/26.
 */
var events = require('events');

var eventsEmitter = new events.EventEmitter();

eventsEmitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

eventsEmitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

eventsEmitter.on('someEvent', function (arg1) {
    console.log('listener3', arg1);
});

//console.log(eventsEmitter.listeners('someEvent'));

eventsEmitter.emit('error');

eventsEmitter.emit('someEvent', 'arg1', 'arg2');

var listener1 = function listener1() {
    console.log('Listener listener1 execution');
}

var listener2 = function listener2() {
    console.log('Listener listener2 execution');
}

eventsEmitter.addListener('connection', listener1);

eventsEmitter.on('connection', listener2);

var eventListeners1 = events.EventEmitter.listenerCount(eventsEmitter, 'someEvent');
console.log(eventListeners1);

var eventListeners2 = events.EventEmitter.listenerCount(eventsEmitter, 'connection');
console.log(eventListeners2);

eventsEmitter.emit('connection');

eventsEmitter.removeListener('connection', listener1);

eventListeners2 = events.EventEmitter.listenerCount(eventsEmitter, 'connection');
console.log(eventListeners2);

console.log('The program is finished');

