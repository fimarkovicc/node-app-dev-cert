// node --inspect index.js
// node --inspect-brk index.js

function fn(n) {
	if (n == 50) throw Error()
	debugger
	fn(n - 1)
}

fn(100)
