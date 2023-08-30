// check syntax - or -check, will throw error if errors in syntax
// const a = 11
// a = 'text'

// cli: print and evaluate; -p or --print, -e or --evaluate
// node -p "1+1" /prints 2 in the console
// node -p "console.log(1+1)" / prints 2 in the console and then undefined
// node -e "1+1" / prints nothing in the console
// node -e "console.log(1+1)" / prints 2 in the console

// cli: preloading modules, will load module before executing following code; -r or --require
// node -r ./preload.js text.js / will print the console.log from the preload.js file and then the console.log from the text.js file

// stack trace; --stack-trace-limit=xy
// function stackTrace(n = 20) {
//     if (n < 1) throw Error()
//     stackTrace(n - 1)
// }
// stackTrace()
