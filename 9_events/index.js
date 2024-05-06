const { EventEmitter } = require('node:events')

class Emitter extends EventEmitter {}

const myE = new Event()

myE.on('foo', () => console.log('first'))
myE.emit('foo')
