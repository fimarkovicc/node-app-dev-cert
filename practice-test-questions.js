// Allocate a 128 byte safe Buffer.
// const buffer = Buffer.alloc(128)

// Pipe stdin to stdout
// process.stdin.pipe(process.stdout)

// Validate a script (e.g. app.js) without executing it.
// node -c "practice.js" // interminal
// node -c ./16_testing/add.js // in another folder

// Execute a script and break on first line without making changes to the script.
// node --inspect-brk practice.js // in terminal

// Execute a script and break once before returning from function X when running in debug/inspection mode.
// function x() {
// 	// code here
// 	debugger
// 	return
// }
// node --inspect practice.js

// Given a function read() and a function write(), read given files asynchronously, concatenate the contents (without delimiter) and write the full content to given filename. If an error occurs, ensure it's propagated correctly.
// const fs = require('node:fs')
// const path = require('path')
// const files = ['practice.js', 'package.json']
// Promises
// function read(file) {
// 	return new Promise((resolve, reject) => {
// 		try {
// 			const fileData = fs.promises.readFile(path.join(__dirname, file), { encoding: 'utf-8' })
// 			resolve(fileData)
// 		} catch (error) {
// 			reject(error)
// 		}
// 	})
// }

// function write() {
// 	files.forEach((file) => {
// 		try {
// 			read(file)
// 				.then((data) =>
// 					fs.promises.writeFile(path.join(__dirname, 'out.txt'), data, { flag: 'a' }),
// 				)
// 				.catch((e) => e)
// 		} catch (error) {
// 			throw error
// 		}
// 	})
// }

// write()

// read('practice.js')
// 	.then((data) => console.log(data))
// 	.catch((e) => console.log(e))

// Async-await
// async function read(filePath) {
// 	try {
// 		return await fs.promises.readFile(filePath, 'utf-8')
// 	} catch (error) {
// 		throw error
// 	}
// }

// async function write(filePath, data) {
// 	try {
// 		return await fs.promises.writeFile(filePath, data, { flag: 'a' })
// 	} catch (error) {
// 		throw error
// 	}
// }

// async function run(outFile, filepaths) {
// 	try {
// 		const fileContentPromises = filepaths.map(read)
// 		const fileContent = Promise.all(fileContentPromises)
// 		const fileContentConcat = (await fileContent).join('')
// 		await write(outFile, fileContentConcat)
// 	} catch (error) {
// 		throw error
// 	}
// }

// run('out.txt', ['practice.js', 'package.json'])

// Read all files in current directory and write the absolute path in a JSON file. Exclude the file that is running the code.
// const fs = require('node:fs')
// const path = require('node:path')
// const files = fs.readdirSync(__dirname)

// function run() {
// 	const allItemsInDir = fs.readdirSync(__dirname)
// 	const onlyFiles = allItemsInDir.filter((item) => fs.statSync(item).isFile())
// 	const onlyFilesFiltered = onlyFiles.filter((file) => file != path.basename(__filename))
// 	const filesWithPath = onlyFilesFiltered.map((file) => path.resolve(file))
// 	fs.writeFileSync('files.json', JSON.stringify(filesWithPath, null, 4))
// }
// run()

// Execute given command in ./target.
// const { exec } = require('node:child_process')

// exec('ls -ls', { cwd: './target' }, (error, stdout, stderr) => {
// 	if (error) console.log(error)
// 	if (stdout) console.log(stdout)
// 	if (stderr) console.log(stderr)
// })

// or cd ./target && node <command>

// Implement a function with parameter n which returns a function with parameter c. Let it return n^c.
// function fn(n) {
// 	return (c) => n * c
// }
// const a = fn(2)
// console.log(a(4)) // 8

// Implement an object that has the following functions:
// sing
// dance
// Create a prototype of that object which adds the functions:

// jig
// skip
// Create a prototype of the prototype that adds the following functions:

// move
// turn

// class Obj1 {
// 	constructor() {}
// 	sing() {}
// 	dance() {}
// }
// class Obj2 extends Obj1 {
// 	constructor() {
// 		super()
// 	}
// 	jig() {}
// 	skip() {}
// }

// class Obj3 extends Obj2 {
// 	constructor() {
// 		super()
// 	}
// 	move() {}
// 	turn() {}
// }

// Use a test framework to assert that:
// 7 - 8 returns the correct result
// '7' - 8 throws an Error
// 10 - 11 is not a string
// Ensure that tests can be run using npm test.

// npm i -D jest
// package.json -> scripts: "test": "jest --coverage"

// function subtract(a, b) {
// 	if (typeof a != 'number' || typeof b != 'number') throw Error('not a number')
// 	return a - b
// }

// //import subtract.js

// test('function run correctly', () => {
// 	expect(subtract(7, 8)).toStrictlyEqual(-1)
// 	expect(() => subtract('7', 8)).toThrowError('not a number')
// 	expect(subtract(10, 11)).not.toBeInstanceOf(String)
// })

// Add the following packages:
// pump, version X accepting all future patch versions
// bl, version X accepting all future minor versions
// fastify, exactly version X
// gulp, version X but not in production
// Require all packages.

// npm i pump@~3.0.0
// npm i bl@^6.0.12
// npm i fastify@4.26.2 --save-exact
// npm i -D gulp@4.0.0
// const pump = require('pump')
// const BufferList = require('bl')
// const fastify = require('fastify')
// const gulp = require('gulp')

// Install package fast-redact and use require() to resolve the path to the package.
// npm i fast-redact
// const fastRedact = require("fast-redact")

// Implement a module that takes two arguments A and B and returns a function A - B.
// module.exports = (a, b) => {
//     return a - b
// }

// Given an event emitter, add a listener "data" and ensure that if it occurs the event is only listened to once.
// const EventEmitter = require('node:events')
// class CustomEmitter extends EventEmitter {}
// const ee = new CustomEmitter()
// ee.once('data', (a, b) => {
// 	/*do something*/
// })
// ee.emit('data', a, b)
// ee.emit('data', a, b) // this doesn´t emit

// Implement a function that takes an input and returns it as a JSON. If an error occurs, return null.
// function makeJson(data) {
// 	try {
// 		return JSON.stringify(data)
// 	} catch {
// 		return null
// 	}
// }

// Log the current uptime and RSS (resident set size) every 0.5 seconds to the console.
// const process = require('node:process')

// setInterval(() => {
// 	console.log('uptime: ', process.uptime())
// 	console.log('rss: ', process.memoryUsage.rss())
// }, 500)

// Exit the program with status code depending on currently running platform:
// 1 for Linux
// 2 for MacOS (Darwin)
// 3 for Windows

// const os = require('node:os')
// const osPlatform = os.platform()
// process.on('exit', (code) => {
// 	console.log('Exit code:', code) // Display the exit code
// })
// switch (osPlatform) {
// 	case 'linux':
// 		process.exit(1)
// 		break
// 	case 'darwin':
// 		process.exit(2)
// 		break
// 	case 'win32':
// 		process.exit(3)
// 		break
// 	default:
// 		process.exit()
// }
