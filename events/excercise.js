/**
 * Register the listener function with the ee event emitter in such a way that the listener function is only called a single time. If implemented correctly, the program should print outpassed!:
 */

// 'use strict'
// const assert = require('assert')
// const { EventEmitter } = require('events')

// const ee = new EventEmitter()

// let count = 0

// setInterval(() => {  ee.emit('tick')}, 100)

// function listener () {  
//     count++  
//     setTimeout(() => {    
//         assert.equal(count, 1)    
//         assert.equal(this, ee)    
//         console.log('passed!')  }, 250)
// }

// ee.once("tick", listener)

/**
 * Currently the process crashes
 * 
 * Without removing any of the existing code, and without using a try/catch block add somecode which stops the process from crashing. When implemented correctly the process shouldoutput passed!.
 */

// 'use strict'
// const { EventEmitter } = require('events')

// process.nextTick(console.log, 'passed!')

// const ee = new EventEmitter()

// ee.on("error", (error)=>error)

// ee.emit('error', Error('timeout'))

