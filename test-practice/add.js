function add(a, b) {
	if (typeof a != 'number' || typeof b != 'number') throw Error('not a number')
	return a - b
}

module.exports = add
