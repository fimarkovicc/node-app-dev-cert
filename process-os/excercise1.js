// Use console.log to output the operating system identifier. 
// Ensure the processexits with a non-zero exit code.
// Run node test.js to verify whether the task was successfully completed, if it was nodetest.js will output passed!

const os = require("os")
const assert = require('assert')

console.log(os.version());
// assert.match(os.version(),  /^(d|w|l|aix|.+bsd|sunos|gnu)/i,  'must output OS identifier')
process.exit(1) // echo $? 