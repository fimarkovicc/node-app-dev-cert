function f(n = 99) {
	if (n === 0) throw Error()
	debugger
	f(n - 1)
}
f()
