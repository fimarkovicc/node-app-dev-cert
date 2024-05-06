const crypto = require('node:crypto')
const { stdin, stdout } = require('node:process')
const process = require('node:process')
const { Transform } = require('node:stream')

// console.log('initialized')
// const transformToUpper = new Transform({
// 	transform(chunk, encoding, cb) {
// 		cb(null, chunk.toString().toUpperCase())
// 	},
// })

// stdin.pipe(transformToUpper).pipe(stdout)

// console.log(crypto.randomUUID())

// setInterval(() => {
// 	console.log('timer')
// }, 500)
// setTimeout(() => {
// 	process.exit(4)
// }, 1600)

// process.on('exit', (code) => console.log('exited with code: ', code))

console.log('process directory ', process.cwd())
console.log('process id ', process.pid)
console.log('process platform ', process.platform)
// console.log('process env vars ', process.env)
process.env.PINK = 'pink'
console.log('env var PINK ', process.env.PINK)
