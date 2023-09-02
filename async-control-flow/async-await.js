const fs = require('fs')

const bigFile = require.resolve('./bigFile.txt')
const mediumFile = require.resolve('./mediumFile.txt')
const smallFile = require.resolve('./smallFile.txt')

const files = [bigFile, mediumFile, smallFile]

function print(content) {
    console.log(content.toString())
}

// simple example
async function reader() {
    const content = await fs.promises.readFile(bigFile)
    print(content)
}
// reader().catch(console.error)

// multiple files
async function readerMany() {
    const file1 = await fs.promises.readFile(bigFile)
    const file2 = await fs.promises.readFile(smallFile)
    const file3 = await fs.promises.readFile(mediumFile)

    print(Buffer.concat([file1, file2, file3]))
}
// readerMany()

// exmaple multiople files dynamically
async function readerFileArray() {
    for (let file of files) {
        print(await fs.promises.readFile(file))
    }
}
// readerFileArray().catch(console.err)

// example multiple files order of execution not important
async function multiFileReader() {
    const readersArray = files.map((file) => fs.promises.readFile(file))

    const data = await Promise.all(readersArray)

    print(Buffer.concat(data))
}
// multiFileReader().catch(console.error)

async function multiReaderAllSettled() {
    const readers = files.map((file) => fs.promises.readFile(file))

    const data = await Promise.allSettled(readers)

    const results = data.map((file) => {
        if (file.status === 'rejected') {
            console.log(file.reason)
        } else {
            return file.value
        }
    })

    print(Buffer.concat(results))
}
multiReaderAllSettled().catch(console.error)
