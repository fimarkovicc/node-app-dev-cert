/*
The below code will generate a project folder and add five files to it with pseudo-randomlygenerated filenames.
Complete the function named exercise so that all the files in the project folder, as stored inthe project constant, are written to the out.txt file as stored in the out constant. 
Only thefile names should be stored, not the full file paths, and file names should be comma separated.

For instance, given a project folder with the following files:
●0p2ly0dluiw
●2ftl32u5zu5
●8t4iilscua6
●90370mamnse
●zfw8w7f8sm8The 

out.txt should then contain:
0p2ly0dluiw,2ftl32u5zu5,8t4iilscua6,90370mamnse,zfw8w7f8sm8

If successfully implemented, the process will output: passed!
*/

'use strict'
const assert = require('assert')
const { join } = require('path')
const fs = require('fs')
const path = require("path")

const project = join(__dirname, 'project')

try { 
    fs.rmdirSync(project, {recursive: true}) 
} catch (err) {}

const files = Array.from(Array(5), () => {  
    return join(project, Math.random().toString(36).slice(2))
})

fs.mkdirSync(project)
for (const f of files) fs.closeSync(fs.openSync(f, 'w'))

const out = join(__dirname, 'out.txt')

function exercise () {  
    // TODO read the files in the project folder  // and write them to the out.txt file
    const files = fs.readdirSync(path.join(__dirname, "project"))
    const filesString = files.toString()

    fs.writeFileSync("out.txt", filesString)
}

exercise()
assert(fs.readFileSync(out).toString(), files.toString())
console.log('passed!')