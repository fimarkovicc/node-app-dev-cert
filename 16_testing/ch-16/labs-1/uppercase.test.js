const uppercase = require('./uppercase.js')

test('inout must be of type string', () => {
	expect(uppercase('hello')).toBe('HELLO')
	expect(() => uppercase(null)).toThrowError()
})
