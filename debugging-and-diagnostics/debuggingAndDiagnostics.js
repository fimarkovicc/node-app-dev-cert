// node --inspect or --inspect-brk

function throwErr(n) {
    if (n === 0) throw Error()
    debugger
    throwErr(n - 1)
}
throwErr(99)
