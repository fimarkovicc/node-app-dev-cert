// console.log(process.argv)
console.log("Hello, from child")
console.log("child pid:", process.pid)

process.on("message", (msg)=>{
    // console.log("Message: ", msg)
    // process.exit(0)

    let i = 0
        while(i < 5000000000){
            i++
        }
    process.send(`${i} iterations complete`)
    
})

// process.send({text: "message from child to parent"})