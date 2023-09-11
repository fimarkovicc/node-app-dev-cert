const { execFile } = require("child_process")

// execFile("C:/Program Files (x86)/Foxit Software/Foxit PDF Reader/FoxitPDFReader.exe", (err, stdout, stderr)=>{
execFile("node", ["-v"], (err, stdout, stderr)=>{
    if(err) {
        throw err
    }
    if(stderr) {
        throw stderr
    }
    console.log(stdout)
})