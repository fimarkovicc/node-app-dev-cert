const store = require('./store.js')

test('test store function throws error', (done) => {
	function cb(data) {
		expect(data).toStrictEqual(Error('input must be a buffer'))
		done()
	}
	store(null, cb)
})

test('expect id to be returned', (done) => {
	const buffer = Buffer.from('iuwztwieutz')
	const cb = (error, data) => {
		expect(error).toBeNull()
		expect(data).toHaveProperty('id')
		expect(data.id).toHaveLength(4)
		done()
	}

	store(buffer, cb)
})
