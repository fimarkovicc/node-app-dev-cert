// 'use strict'
// const assert = require('assert')

// function parseUrl (str) {    
//     try {
//         const parsed = new URL(str)
//         return parsed
//     } catch (error) {
//         return null
//     }
// }

// assert.doesNotThrow(() => { parseUrl('invalid-url') })
// assert.equal(parseUrl('invalid-url'), null)
// assert.deepEqual(  parseUrl('http://example.com'),  new URL('http://example.com'))
// console.log('passed!')

'use strict'
const fs = require('fs')
const assert = require('assert')

async function read (file) {  
    try {
        const content = await fs.promises.readFile(file)
        return content
    } catch (error) {
        throw new Error("failed to read")
    }
}

async function check () {  
    await assert.rejects(read('not-a-valid-filepath'), new Error('failed to read'))
    assert.deepEqual(await read(__filename), fs.readFileSync(__filename))  
    console.log('passed!')
}

check()