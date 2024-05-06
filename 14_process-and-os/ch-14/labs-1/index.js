/*
In index.js use console.log to output the operating system identifier. Ensure the processexits with a non-zero exit code.Run node test.js to verify whether the task was successfully completed, if it was nodetest.js will output passed!
*/
const process = require('node:process')
console.log(process.platform)
process.exit(1)
