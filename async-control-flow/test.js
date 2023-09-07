// setinterval , settimeout
// const intervalId = setInterval(
//     (name) => {
//         console.log('hello...' + name)
//     },
//     1000,
//     'Filip'
// )

// setTimeout(() => {
//     clearInterval(intervalId)
// }, 4000)

// const b = 'b'
// const a = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'a')
// })
// const c = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('abc')
//         resolve('c')
//     }, 1000)
// })
// Promise.race([a, c])
//     .then((results) => console.log(results))
//     .catch((error) => console.log(error))

// try {
//     console.log(1)
//     console.log(2)
//     throw new Error('some error')
//     console.log(3)
// } catch (error) {
//     console.log(error)
// }

// console.log('outside')
