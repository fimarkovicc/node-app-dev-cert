// Functional inheritance

const a = {
    action: function () {
        console.log(`${this.name} makes action a.`)
    }
}

const b = Object.create(a, {
    speed: {
        value: function () {
            console.log(`${this.name} has speed of b.`)
        }
    },
    name: {
        value: 'Name B'
    }
})

const c = Object.create(b, {
    name: {
        value: 'Name C'
    }
})

c.action()
c.speed()
console.log(b.name)
b.action()
a.action() // undefined
