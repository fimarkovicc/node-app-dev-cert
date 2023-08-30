function fn2() {
    console.log(this.id)
}

const fn3 = () => {
    console.log(this)
}

function fn4() {
    return () => console.log(`${this.id}`) // uses parent functions this
}

const obj1 = {
    fn: function () {
        console.log(`id: ${this.id}`)
    },
    id: 1
}

const obj2 = {
    fn: obj1.fn,
    id: 2
}

const obj3 = {
    id: 3
}

obj1.fn()
obj2.fn()

fn2.call(obj1)
fn2.call(obj2)
fn2.call({ id: 3 })
fn3() // undefined
const getId = fn4.call(obj1)
getId()

console.log(fn3.prototype) // undefined
console.log(fn4.prototype) // object
