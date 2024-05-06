const store = require('./store.js')

// test('test store function', () => {
// 	store(223).then((data) => {
// 		expect(data).toStrictEqual({ id: 223 })
// 	})
// 	store('zrhzr').catch((error) => {
// 		expect(error).toStrictEqual(Error('not a number'))
// 	})
// })

test('test store function with asyn await', async () => {
	// const res = await store(22)
	await expect(store(22)).resolves.toStrictEqual({ id: 22 })
	await expect(store('ee')).rejects.toMatch('not a number')
})
