// Alter the code so that buffer is safely allocated. If the process prints the buffer and then logspassed! the exercise was correctly completed.
// "use strict"
// const assert = require("assert")
// // const buffer = Buffer.allocUnsafe(1024)
// const buffer = Buffer.alloc(1024)
// console.log(buffer)

// for(const byte of buffer){
//     assert.equal(byte, buffer[0])
// }

// console.log("passed!")

// Using the Buffer API in some way, edit the code so that the base64 constant contains a base64representation of the str constant.If the process prints the base64 string and then logs passed! the exercise was correctlycompleted.

'use strict'
const assert = require('assert')
const str = 'buffers are neat'
const base64 = Buffer.from(str).toString("base64") // convert str to base64
console.log(base64)
assert.equal(base64, Buffer.from([89,110,86,109,90,109,86,121,99,121,66,104,99,109,85,103,98,109,86,104,100,65,61,61]))
console.log('passed!')