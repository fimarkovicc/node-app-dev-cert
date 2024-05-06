'use strict'
const { promisify } = require('util')

const print = (err, contents) => {
	if (err) console.error(err)
	else console.log(contents)
}

const opA = (cb) => {
	setTimeout(() => {
		cb(null, 'A')
	}, 500)
}

const opB = (cb) => {
	setTimeout(() => {
		cb(null, 'B')
	}, 250)
}

const opC = (cb) => {
	setTimeout(() => {
		cb(null, 'C')
	}, 125)
}

async function run() {
	const a = promisify(opA)
	const b = promisify(opB)
	const c = promisify(opC)

	const resa = await a()
	const resb = await b()
	const resc = await c()
	print(null, resa)
	print(null, resb)
	print(null, resc)
}

run()
