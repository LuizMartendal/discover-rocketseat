const { log } = require('console')
const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log("Diga algo", message);
})

ev.emit('saySomething', 'Luiz')
ev.emit('saySomething', 'Dorivaldo')