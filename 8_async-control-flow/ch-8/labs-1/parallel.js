const { promisify } = require('node:util')

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

// opA(print)
// opB(print)
// opC(print)

// opC((errC, resC) => {
// 	print(errC, resC)
// 	opB((errB, resB) => {
// 		print(errB, resB)
// 		opA((errA, resA) => {
// 			print(errA, resA)
// 		})
// 	})
// })

const a = promisify(opA)
const b = promisify(opB)
const c = promisify(opC)

c()
	.then((resC) => {
		print(resC)
		return b()
	})
	.then((resB) => {
		print(resB)
		return a()
	})
	.then((resA) => {
		print(resA)
	})
	.catch((error) => print(error))
