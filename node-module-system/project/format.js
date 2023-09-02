const { add } = require('./index.js')

function upper(str) {
    if (typeof str !== 'string') return null
    return str.toUpperCase()
}

const test = 'random data'

console.log(add(19, 23))

module.exports = { upper, test }
