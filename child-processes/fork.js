const { fork } = require("child_process")

// console.log("parent pid:", process.pid)
// const child = fork("./child.js")

// child.send({ text: "this is a message" })

// child.on("message", (msg)=>console.log("msg from child:", msg))

// child.on("close", (exitcode) => {
//     console.log("exit code:", exitcode)
// })

//e.g.
const http = require("http")
const server = http.createServer()

const child = fork("./child.js")

server.on("request", (req, res)=>{
    if(req.url == "/heavy"){
        // let i = 0
        // while(i < 5000000000){
        //     i++
        // }
        child.send("Start")
        child.on("message", (msg)=>res.end(msg))

        // res.end(`${i} iterations complete \n`)
        console.log("heavy request")
    }else if(req.url == "/light"){
        res.end("Success!")
        console.log("light request")
    }
})

server.listen(4000, ()=>console.log("listening port 4000"))

