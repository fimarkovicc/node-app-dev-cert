const fs = require('fs')
const smallFile = require.resolve('./smallFile.txt')
const mediumFile = require.resolve('./mediumFile.txt')
const bigFile = require.resolve('./bigFile.txt')
const { promisify } = require('util')
const { readFile } = require('fs').promises

const files = [smallFile, mediumFile, bigFile]

const print = (data) => {
    console.log(Buffer.concat(data).toString())
}

const readers = files.map((file) => readFile(file))

Promise.all(readers).then(print).catch(console.error)

//using node promisify from utils mdule
// const getData = promisify((resolve, reject) => {
//     fs.readFile(smallFile, (error, content) => {
//         if (error) reject(error)
//         resolve(content.toString())
//     })
// })

// getData()
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

// using promisis
// const getDataSmall = new Promise((resolve, reject) => {
//     fs.readFile(smallFile, (error, content) => {
//         if (error) reject(error)
//         resolve(content.toString())
//     })
// })

// const getDataMedium = new Promise((resolve, reject) => {
//     fs.readFile(mediumFile, (error, content) => {
//         if (error) reject(error)
//         resolve(content.toString())
//     })
// })

// Promise.all([getDataSmall, getDataMedium]).then((allResults) =>
//     console.log(allResults)
// )
