// Call functions in such a way that C then B then A is printed out.
// The opA function must be called before opB, and opB must be called before opC.

// const print = (err, contents) => {
//     if (err) console.error(err)
//     else console.log(contents)
// }

// const opA = (cb) => {
//     setTimeout(() => {
//         cb(null, 'A')
//     }, 500)
// }

// const opB = (cb) => {
//     setTimeout(() => {
//         cb(null, 'B')
//     }, 250)
// }

// const opC = (cb) => {
//     setTimeout(() => {
//         cb(null, 'C')
//     }, 125)
// }

// opA(print)
// opB(print)
// opC(print)

// // Call the functions in such a way that A then B then C is printed out.

const { promisify } = require('util')
const print = (err, contents) => {
    if (err) console.error(err)
    console.log(contents)
}
// const opA = (cb) => {
//     setTimeout(() => {
//         cb(null, 'A')
//     }, 500)
// }
const opB = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb(null, 'B')
            resolve()
        }, 250)
    })
}
const opC = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb(null, 'C')
            resolve()
        }, 250)
    })
}
const opA = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb(null, 'A')
            resolve()
        }, 250)
    })
}
// const opC = (cb) => {
//     setTimeout(() => {
//         cb(null, 'C')
//     }, 125)
// }

function makePromise(fn) {
    return promisify(fn)
}

async function run(cb) {
    // const a = makePromise(opA)
    // const b = makePromise(opB)
    // const c = makePromise(opC)
    // await opA(cb)
    await opA(cb)
    await opB(cb)
    await opC(cb)
    // await opC(cb)
}
run(print)
