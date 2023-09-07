const fs = require("fs")
const { Readable } = require("stream")

// const readebleStream = fs.createReadStream("./file1.txt", {
//     encoding: "utf-8",
//     highWaterMark: 10
// })

// const writeableStream = fs.createWriteStream("./file2.txt")

// readebleStream.on("data", (chunk) => {
//     console.log(chunk)
//     writeableStream.write(chunk)
// })

// function createReadStream(){
//     const data = ["some", "data", "to", "read"]

//     return new Readable({
//         // encoding: 'utf8',
//         // objectMode: true,
//         read(){
//             if (data.length == 0) this.push(null)
//             this.push(data.shift())
//         }
//     })
// }

// const readable = createReadStream()

// readable.on("data", (data) => console.log(data))
// readable.on("end", ()=>console.log("---end---"))

// const readable = Readable.from(["some", "data", "to", "read"])

// readable.on("data", (data)=>console.log(data))
// readable.on("end", ()=>console.log("--end--"))

const writeable = fs.createWriteStream("./out")
writeable.on("finish", ()=> console.log("finished writing--"))
writeable.write("A\n")
writeable.write("B\n")
writeable.write("C\n")
writeable.end("nothing more to write")