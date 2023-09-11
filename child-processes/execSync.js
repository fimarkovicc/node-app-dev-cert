const { execSync } = require("child_process")
const os = require("os")

// const output = execSync(
//     `node -e "console.log('subprocess stdio output')"`
//     // `node -e "console.error('subprocess stdio error output')"`
//     // process.platform === "win32" ? "dir" : "ls"
//     // `${process.execPath} -e "console.error('subprocess stdio output')"`
// )

// console.log(output.toString());

// try {
//     execSync(`${process.execPath} -e "process.exit(1)"`)
//   } catch (err) {
//     console.error('CAUGHT ERROR:', err)
//   }


// try {
//     execSync(`${process.execPath} -e "throw Error('kaboom')"`)
//   } catch (err) {
//     console.error('CAUGHT ERROR:', err)
//   }
// console.log(output.toString())

// const data = execSync("ls -lh")
// console.log(data.toString())

const data = execSync(`node -e "console.log('subprocess stdio output')"`).toString()
console.log(data)