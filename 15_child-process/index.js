// const {
// 	exec,
// 	execSync,
// 	execFile,
// 	execFileSync,
// 	spawn,
// 	spawnSync,
// 	fork,
// } = require('node:child_process')
// const path = require('node:path')

// exec('ls -lh', (error, stdout, stderror) => {
// 	if (error) {
// 		console.log(error)
// 		return
// 	}
// 	if (stderror) {
// 		console.log(stderror)
// 		return
// 	}
// 	console.log('stdout exec\n', stdout)
// 	return
// })

// execFile('node', [path.join(__dirname, 'sample.js')], (error, stdout, stderror) => {
// 	if (error) {
// 		console.log(error)
// 		return
// 	}
// 	if (stderror) {
// 		console.log(stderror)
// 		return
// 	}
// 	console.log('stdout execfile\n', stdout)
// })

// const spawn1 = spawn('ls', ['-lh'])
// spawn1.stdout.on('data', (data) => console.log(data.toString()))
// spawn1.on('close', (code) => console.log('exit with code: ', code))

// const result = execSync('node -e "console.log(\'child process console\')"')
// const result2 = execSync('node -e "console.error(\'child process console error\')"')
// const result3 = execSync('ls -lh')
// console.log(result.toString())
// console.log(result2.toString())
// console.log(result3.toString())

// const result4 = execSync('node -p process.pid')

// console.log('current pid: ', process.pid)
// console.log('current pid: ', result4.toString())

// exec(
// 	`node -e "console.log('A'); console.error('B'); throw Error('Error...')"`,
// 	(error, stdout, stderror) => {
// 		console.log('error', error)
// 		console.log('stdout', stdout)
// 		console.log('stderror', stderror)
// 	},
// )

// const res = spawnSync('node', ['-e', "console.log('AAA')"])
// console.log(res.stdout.toString())
// const res2 = spawnSync('node', ['-e', 'process.exit(3)'])
// console.log(res2)
// const res3 = spawnSync('node', ['-e', 'throw Error("Error999")'])
// console.log(res3.stderr.toString())

// const res = spawn('node', ['-e', "console.log('Hello')"])
// console.log(res.pid)
// // res.stdout.on('data', (data) => console.log(data.toString()))
// res.stdout.pipe(process.stdout)

const { spawn } = require('child_process')
// console.log(process)
const a = spawn('node', ['-e', 'console.log(process.env.MY_ENV)'], {
	cwd: '.',
	env: { MY_ENV: 'khdaiduzs' },
	stdio: 'inherit',
})
// a.stdout.on('data', (data) => console.log(`data: ${data.toString()}`))
// a.stderr.on('data', (data) => console.log(`data: ${data.toString()}`))
// a.stdout.on('data', (data) => console.log(data.toString()))
