// const EventEmitter = require("events")

// const emitter = new EventEmitter()

// emitter.on("eventName", () => console.log("event fired"))
// emitter.once("eventName", (a, b) => {
//     console.log("event fired with args:", a, b)
// })

// emitter.emit("eventName")
// emitter.emit("eventName")
// emitter.emit("eventName")

// emitter.emit("eventName", "arg1", "arg2")

const CustomEmitter = require("./customEmitter.js")

const myEmitter = new CustomEmitter()
process.stdin.resume()

myEmitter.on("error", (error)=> console.log(error.message))

myEmitter.emit("error", new Error("oh no error"))

// function listenerFn1(){
//     console.log("listener function 1")
// }
// function listenerFn2(){
//     console.log("listener function 2")
// }

// myEmitter.on("eventName", listenerFn1)
// myEmitter.on("eventName", listenerFn2)

// myEmitter.on("eventName", (product, quantity)=>{
//     myEmitter.order(product, quantity)
//     const orderNumber = myEmitter.getOrderNumber()
//     console.log(`Order number ${orderNumber}: ${product} - ${quantity} pieces.`)
// })

// myEmitter.emit("eventName", "product1", 5)
// myEmitter.emit("eventName", "product2", 4)

// setTimeout(()=>{
//     myEmitter.removeListener("eventName", listenerFn1)
// }, 2000)

// setInterval(()=>{
//     myEmitter.emit("eventName")
// }, 300)





