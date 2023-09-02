const { readFile } = require('fs')
const smallFile = require.resolve('./smallFile.txt')
const mediumFile = require.resolve('./mediumFile.txt')
const bigFile = require.resolve('./bigFile.txt')

// async - dynamic
// function print(err, content) {
//     if (err) {
//         console.log('error reading file')
//     }
//     console.log(content.toString())
// }

// const files = [mediumFile, bigFile, smallFile]
// let count = files.length
// let index = 0

// function reader(file) {
//     readFile(file, (err, content) => {
//         index++
//         print(err, content)
//         if (index < count) {
//             reader(files[index])
//         }
//         return
//     })
// }

// reader(files[index])

////async - manual
function print(err, content) {
    if (err) {
        console.log(err)
        return
    }
    console.log(content.toString())
}

readFile(bigFile, (err, content) => {
    print(err, content)

    readFile(mediumFile, (err, content) => {
        print(err, content)

        readFile(smallFile, (err, content) => {
            print(err, content)
        })
    })
})

// async
// function print(err, content) {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(content.toString())
// }

// readFile(mediumFile, print)
// readFile(bigFile, print)
// readFile(smallFile, print)
