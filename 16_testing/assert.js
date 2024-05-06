const assert = require('node:assert')

const result = (a, b) => a + b
assert.equal(result(4, 4), 8)
assert(result(4, 4) == 8)
// assert.equal(result(4, '4'), 8) // throw
// assert.equal(typeof result(4, '4'), 'number') // htrow

const obj1 = { name: 'filip', age: '42' }
const obj2 = { name: 'filip', age: 42 }
const obj3 = obj2
// assert.equal(obj1, obj2) // htrow
assert.deepEqual(obj1, obj2)
assert.equal(obj3, obj2)
// assert.deepStrictEqual(obj1, obj2) // throws

function add(a, b) {
	if (typeof a != 'number' || typeof b != 'number') {
		throw Error('not a number')
	}
	return a + b
}
// assert.throws(add('3', 4)) //throws
assert.doesNotThrow(() => add(5, 8))

const { URL } = require('node:url')

function apiReq(url, cb) {
	try {
		new URL(url)
		cb(null, { data: 'data' })
	} catch {
		cb(Error('invalid url'))
	}
}

apiReq('http://google.com', (error, data) => {
	assert.ifError(error)
})

// apiReq('invalid', (error, data) => { //throws
// 	assert.ifError(error)
// })
apiReq('invalid', (error, data) => {
	//throws
	assert.deepEqual(Error('invalid url'), error)
})

const { promisify } = require('util')
const timeout = promisify(setTimeout)
const apiReqAsync = async (url) => {
	await timeout(300)
	if (url === 'http://error.com') throw Error('invalid url')
	return Buffer.from('some data')
}

// assert.rejects(apiReqAsync('invalid'), Error('invalid url')) //throws
assert.doesNotReject(apiReqAsync('http:/error.com'))
