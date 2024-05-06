const fs = require('node:fs')
const path = require('node:path')

// fs.readdir(__dirname, { withFileTypes: true }, (error, data) => {
// 	if (error) {
// 		console.log(error)
// 		return
// 	}
// 	dataA = data
// 		.toString()
// 		.split(',')
// 		.filter((file) => file != path.basename(__filename))
// 	console.log(path.basename(__filename))
// 	console.log(Object.keys(dataA[0]))
// })

// // callbacks - serial executtion
// fs.readFile(bigFile, (error, data) => {
// 	if (error) {
// 		console.log(error)
// 		return
// 	}
// 	allData.push(data)
// 	fs.readFile(smallFile, (error, data) => {
// 		if (error) {
// 			console.log(error)
// 			return
// 		}
// 		allData.push(data)
// 		fs.readFile(mediumFile, (error, data) => {
// 			if (error) {
// 				console.log(error)
// 				return
// 			}
// 			allData.push(data)
// 			// console.log(Buffer.concat(allData).toString())
// 		})
// 	})
// })

// // Same as above - refactored
// const files = Array(3).fill(__filename)
// const [bigFile, mediumFile, smallFile] = files
// allData = []

// // callbacks refcatored
// let index = 0
// function reader(filePath) {
// 	fs.readFile(filePath, (error, data) => {
// 		if (error) {
// 			console.log(error)
// 			return
// 		}
// 		allData.push(data)
// 		index++
// 		if (index < files.length) {
// 			reader(files[index])
// 		} else {
// 			console.log(allData)
// 		}
// 	})
// }
// reader(files[index])
