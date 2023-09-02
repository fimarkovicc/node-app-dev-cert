const pino = require('pino')
const logger = pino()
const format = require('./format')

if (require.main === module) {
    logger.info(format.upper('package started'))
} else {
    const reverseUpper = function (str) {
        if (str !== 'string') return null
        return format.upper(str).split('').reverse().join()
    }
    const add = function (a, b) {
        return a + b
    }

    module.exports = { add, reverseUpper }
}
