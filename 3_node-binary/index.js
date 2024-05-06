// chacking syntax
// node -c sample.js
// node --check sample.js

// dynamic evaluation
// node -e "console.log(3+6)"
// node -p "console.log/3+6)"
// node -p "fs.readdirSync('.')" // core modules are loaded without requireing them implicitly

// preloading modules
// node -r ./sample.js index.js
// console.log('Index.js', someVar)

// stack trace
// node --stack-trace-limit=110 index.js
// function fn(n = 100) {
// 	if (n == 0) throw Error()
// 	fn(n - 1)
// }
// fn()
