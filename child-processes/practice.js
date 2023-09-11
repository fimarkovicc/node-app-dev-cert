const {exec, spawn} = require("child_process")

// console.log("SPAWN:")
// const data = spawn("dir", ["/b"], {shell: true})
// data.stdout.on("data", (data => console.log(data.toString())))
// data.stderr.on("data", (error => console.log(error)))
// data.on("error", error => console.log(error))

// exec("dir /b", (err, stdout, stderr) => {
//     if(err) throw err
//     if(stderr) throw stderr
//     console.log("EXEC:")
//     console.log(stdout)
// })

// exec("node nodecommand.js", {maxBuffer: 5*1024*1024}, (err, stdout, stderr) => {
//     if(err) throw err
//     if(stderr) throw stderr
//     console.log("EXEC:")
//     console.log(stdout)
// })

// const data = spawn("node", ["nodecommand.js"], {shell: true})
// data.stderr.on("data", error => console.log(error))
// data.stdout.on("data", data=>{
//     console.log(data.toString())
//     }
// )