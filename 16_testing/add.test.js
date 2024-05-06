const add = require('./add.js')

test('check if arguments are numbers', () => {
	expect(() => add(4, 5).not.toThrowError())
	expect(() => add('4', 5).toThrowError(Error('not a number')))
})
