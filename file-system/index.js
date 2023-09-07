const path = require("path")
const fs = require("fs")

// console.log(__filename)
// console.log(__dirname)

// console.log(path.join(__dirname, "sample.txt"))
// console.log(path.isAbsolute(path.join(__dirname, "sample.txt")));
// console.log(path.isAbsolute("../test/demo_path.js"))
// console.log(path.relative("C:\\Users\\fma\\Desktop\\private repos\\node-app-dev-cert\\file-system\\index.js", "C:\\Users\\fma\\Desktop\\private repos\\node-app-dev-cert\\index.js"))
// console.log(path.resolve('foo', 'bar', 'baz'));
// console.log(path.resolve('/foo', 'bar', 'baz'));
// console.log(path.normalize('/foo/../bar//baz'));
// console.log('filename parsed:', path.parse(__filename))
// console.log('filename basename:', path.basename(__filename))
// console.log('filename dirname:', path.dirname(__filename))
// console.log('filename extname:', path.extname(__filename))

// const file = fs.readFileSync(__filename)
// const file = fs.readFileSync(__filename, {encoding: "utf-8"})
// console.log(file);
// console.log(path.join(__dirname, "file.txt"));
// fs.writeFileSync(path.join(__dirname, "file.txt"), file)

// fs.readFile(__filename, (error, content)=>{
//     if(error) {
//         console.error(error)
//         return
//     }
//     fs.writeFile(path.join(__dirname, "out"), content, (err)=>{
//         if(error) console.log(err)
//     })
// })

// async function write(){
//     const content = await fs.promises.readFile(__filename)
//     fs.promises.writeFile("outPromise", content)
// }
// write()

// fs.watch('.', (evt, filename) => {
//     console.log(evt, filename)
// })

// console.log(fs.readdirSync(__dirname));
// fs.readdir(__dirname, (err, content) => console.log(content))
// async function read(){
//     const content = await fs.promises.readdir(__dirname)
//     console.log(content);
// }
// read()
// new Promise((resolve, reject)=>{
//     try{
//         const data = fs.promises.readdir(__dirname)
//         resolve(data)
//     }catch(err){
//         reject(err)
//     }
// }).then(data=>console.log(data)).catch(err=>console.error(err))

const files = fs.readdirSync(__dirname)

for(const file of files){
    const stat = fs.statSync(file)
    const type = stat.isDirectory() ? "dir" : "file"
    
    const { atime, mtime, ctime, birthtime } = stat
    console.log("a-time:", atime.toLocaleString(), type);
}

// console.log(fs.statSync(__filename))
