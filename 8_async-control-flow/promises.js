const fs = require('node:fs').promises
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

// function readFile() {
// 	return new Promise((resolve, reject) => {

// 		const error = false
// 		setTimeout(() => {
// 			const data = 12376
// 			if (error) reject('error')
// 			resolve(data)
// 		}, 1000)
// 	})
// }

// readFile()
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error))

const promise = (n) =>
	new Promise((resolve, reject) => {
		resolve(n)
	})

Promise.all([promise(1), promise(2), promise(3)]).then((data) => console.log(data))
