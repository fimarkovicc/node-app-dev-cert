const { spawn, spawnSync } = require("child_process")

// const fileList = spawn("dir", ["/b"],{shell: true}) // windows cmd
// // const fileList = spawn("ls", ["-lh"])
// fileList.stdout.on("data", (data) => {
//     // console.log(data)
//     console.log(data.toString())
// })
// fileList.stderr.on("data", error => console.log(error))

// fileList.on("error", error => console.log(error))

// fileList.on("exit", (code, signal) => {
//     if(code) console.log("code", code)
//     if(signal) console.log("signal", signal)
//     console.log("done")
// })

const result = spawnSync("dir", ["/b", process.env], {shell: true})
console.log(result.stdout.toString())
