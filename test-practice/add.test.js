const add = require('./add.js')

test('function run correctly', () => {
	expect(add(7, 8)).toBe(-1)
	expect(() => add('7', 8)).toThrowError('not a number')
	expect(add(10, 11)).not.toBeInstanceOf(String)
})
