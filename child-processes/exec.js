const { exec } = require("child_process")
const os = require("os")

// no stream output as in spawn, runs in shell automatically, large data will fail -> use stream/spawn

exec("dir", (err, stdout, stderr)=>{ // win // copy exec.js dataFile
// exec("pwd", (err, stdout, stderr)=>{ // bash
    if(err) {
        console.error(err)
        return
    }
    if(stderr) {
        console.error(stderr)
        return
    }
    console.log(stdout)
})