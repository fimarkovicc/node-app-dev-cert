// Create a secure buffer with a length of 2048 bytes.
// const buffer = Buffer.alloc(2048)

// Redirect STDIN to STDOUT
// process.stdin.pipe(process.stdout)

// Given 2 async methods (readFile and writeFile) and an array of filenames. Read the text of all files in parallel, and then concatenate the text (according to order in array) and write it in a different file.

// const fs = require('node:fs')

// const files = ['package.json', '.env', '.prettierrc']

// const reader = (filepath) => {
// 	return new Promise((resolve, reject) => {
// 		try {
// 			resolve(fs.promises.readFile(filepath))
// 		} catch (error) {
// 			throw error
// 		}
// 	})
// }

// const writer = async (filesContentArr) => {
// 	try {
// 		await fs.promises.writeFile('./out2.txt', filesContentArr)
// 	} catch (error) {
// 		throw error
// 	}
// }

// const run = async () => {
// 	const readers = files.map((file) => reader(file))
// 	const filesContentArr = await Promise.all(readers).catch((error) => {
// 		throw error
// 	})
// 	await writer(filesContentArr)
// }
// run()

// Execute a command (given in a single string; no paramter) in folder './target'
// const { exec } = require('node:child_process')

// exec('ls -lh', { cwd: './streams' }, (error, stdout, stderr) => {
// 	if (error) {
// 		console.error(error)
// 		return
// 	}
// 	if (stdout) console.log(stdout)
// 	if (stderr) console.error(stderr)
// })

//Spawn a child process. Pipe the stderr of the child process to stdout of the main, ignore stdin and stdout
// const { spawn } = require('node:child_process')

// const childProcess = spawn('command', { stdio: ['ignore', 'ignore', 'pipe'] })

// childProcess.stderr.pipe(process.stdout)

// Start a node application with remote debugging enabled. Make the program break before executing the script.
// node --inspect-bkr app.js

// Change the code of a node application.  with inspection enabled and make it break before any code is executed.
// in code add debugger
// node --inspect-bkr app.js

// Returns the result of JSON.parse() If an error occurs returns null.
// try {
//     return JSON.parse(...)
// } catch {
//     return null
// }

// Let the code check without executing it.
// node -c app.js

// Change the EventEmitter so that the 'close' event is only responded to once.
// const EventEmitter = require('node:events')
// const ee = new EventEmitter()
// ee.once('eventName', () => {})
// ee.emit('eventName')
