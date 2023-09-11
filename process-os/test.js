// 'use strict'

// const { spawnSync } = require('child_process')
// const assert = require('assert')
// const { status, stdout } = spawnSync(process.argv[0], [__dirname])

// assert.notStrictEqual(status, 0, 'must exit with a non-zero code')
// assert.match(  stdout.toString(),  /^(d|w|l|aix|.+bsd|sunos|gnu)/i,  'must output OS identifier')

// console.log('passed!')

'use strict'

const assert = require('assert')
const os = require('os')
const { runInThisContext } = require('vm')
const run = (s) => runInThisContext(Buffer.from(s, 'base64'))
const { log } = console
const queue = [  (line) => assert.strictEqual(    Math.floor(line),    1,    'first log line should be the uptime of the process' ),  
(line) => assert.strictEqual(    line,    run('KG9zKSA9PiBvcy51cHRpbWUoKQ==')(os),    'second log line should be the uptime of the OS'  ),  
(line) => assert.strictEqual(    line,    run('KG9zKSA9PiBvcy50b3RhbG1lbSgp')(os),    'third line should be total system memory'  ),  
(line) => assert.strictEqual(    line,    run('cHJvY2Vzcy5tZW1vcnlVc2FnZSgpLmhlYXBUb3RhbA=='),    'fourth line should be total process memory'  )]

console.log = (line) => {  
    queue.shift()(line)  
    if (queue.length === 0) {    
        console.log = log    
        console.log('passed!')  
    }
}
        
require('.')