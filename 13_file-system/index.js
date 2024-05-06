const fs = require('node:fs')
const path = require('node:path')
const stream = require('node:stream')

// const filedata = fs.promises.readFile(__filename).then((data) => console.log(data.toString()))
// console.log(__filename)
// console.log(path.join(__dirname, 'index.js'))
// console.log(path.relative(__filename, 'C:\\Users\\fma\\Desktop\\'))

// const file = fs.readFileSync(__filename)
// // console.log(file.toString())
// fs.writeFileSync(path.join(__dirname, 'out.txt'), file, { flag: 'a' })

// fs.readFile(__filename, (error, content) => {
// 	if (error) {
// 		console.log(error)
// 		return
// 	}
// 	console.log(content.toString())
// })

// fs.readFile(__filename, (error, content) => {
// 	if (error) {
// 		console.error(error)
// 		return
// 	}
// 	fs.writeFile(path.join(__dirname, 'out.txt'), content.toString().toUpperCase(), (error) => {
// 		console.error(error)
// 	})
// })

// async function readWriteFile() {
// 	const content = await fs.promises.readFile(__filename, { encoding: 'utf-8' })
// 	await fs.promises.writeFile(path.join(__dirname, 'out.txt'), content)
// }
// readWriteFile()

// function writeToFile(data) {
// 	return new Promise((resolve, reject) => {
// 		resolve(fs.promises.writeFile(path.join(__dirname, 'outPromises.txt'), data))
// 	})
// }

// fs.promises
// 	.readFile(__filename, { encoding: 'utf-8' })
// 	.then((content) => writeToFile(content))
// 	.catch((error) => console.log(error))

// stream.pipeline(
// 	fs.createReadStream(__filename),
// 	fs.createWriteStream(path.join(__dirname, 'outStreams.txt')),
// 	(error) => {
// 		if (error) {
// 			console.error(error)
// 			return
// 		}
// 		console.log('done writing')
// 	},
// )

// function transform() {
// 	return new stream.Transform({
// 		transform(chunk, encoding, cb) {
// 			const toUpper = chunk.toString().toUpperCase()
// 			cb(null, toUpper)
// 		},
// 	})
// }

// stream.pipeline(
// 	fs.createReadStream(__filename),
// 	transform(),
// 	fs.createWriteStream(path.join(__dirname, 'outWithTransformStream.txt')),
// 	(error) => {
// 		if (error) {
// 			console.error(error)
// 			return
// 		}
// 		console.log('done!')
// 	},
// )

// console.log('sync', fs.readdirSync(__dirname)) // sync

// // cb
// fs.readdir(__dirname, (error, data) => {
// 	if (error) console.log(error)
// 	console.log('cb', data)
// })

// // async promise
// async function dirReader() {
// 	try {
// 		const files = await fs.promises.readdir(__dirname)
// 		console.log('async-await', files)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
// dirReader()

// read files in current directory, write files to outFiles.txt not including the current file

// async function fileWriter(filesArr) {
// 	const filesFiltered = filesArr
// 		.filter((item) => {
// 			console.log(path.basename(__filename))
// 			return item != path.basename(__filename)
// 		})
// 		.join(',')
// 	await fs.promises.writeFile(path.join(__dirname, 'outFiles.txt'), filesFiltered)
// }

// try {
// 	const files = fs.readdirSync(__dirname)
// 	fileWriter(files)
// } catch (error) {
// 	console.log(error)
// }

// const files = fs.readdirSync('.')
// files.forEach((file) => {
// 	const type = fs.statSync(file).isDirectory() ? 'directory' : 'file'
// 	console.log(file, type)
// })

// fs.watch('.', (event, file) => {
// 	console.log(event, file)
// })
