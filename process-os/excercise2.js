// Follow the TODO comments for each of the console.log statements
// Run node test.js to verify whether the task was successfully completed, if it was nodetest.js will output passed!

const os = require("os")

'use strict'

setTimeout(() => {  
    console.log(process.uptime()) // TODO output uptime of process  
    console.log(os.uptime()) // TODO output uptime of OS  
    console.log(os.totalmem()) // TODO output total system memory  
    console.log(process.memoryUsage().heapUsed) // TODO output total heap memory
}, 1000)