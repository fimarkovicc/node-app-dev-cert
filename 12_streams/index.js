// const fs = require('fs')
// const { stdin, stdout } = require('process')

// const readable = fs.createReadStream('./file1.txt', {
// 	encoding: 'utf-8',
// 	highWaterMark: 4,
// })
// const writeable = fs.createWriteStream('./file2.txt')
// // readable.on('data', (chunk) => {
// // 	console.log(chunk)
// // 	writeable.write(chunk)
// // })

// // readable.pipe(writeable)
// // stdin.pipe(stdout)
// stdin.pipe(writeable)

// const readable = fs.createReadStream('./file1.txt', {
// 	highWaterMark: 4,
// 	encoding: 'utf-8',
// })

// readable.pipe(stdout)

const fs = require('node:fs')

const readable = fs.createReadStream('./file1.txt', {
	encoding: 'utf-8',
})
const writeable = fs.createWriteStream('./file2.txt')
readable.on('data', (chunk) => {
	writeable.write(chunk)
	writeable.end('end of write')
})
writeable.on('finish', () => console.log('finished'))
