'use strict'
const assert = require('assert')
const buffer = Buffer.alloc(1024)

console.log(buffer.toString('hex'))

// for (const byte of buffer) assert.equal(byte, buffer[0])
// console.log('passed!')
