'use strict'
const { promisify } = require('util')
const timeout = promisify(setTimeout)
module.exports = async (value) => {
	return new Promise((resolve, reject) => {
		if (typeof value != 'number') reject('not a number')
		resolve({ id: value })
	})
}
