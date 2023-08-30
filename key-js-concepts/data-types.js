const primitives = [
    120.5,
    undefined,
    null, // object - quirk
    false,
    Symbol(),
    BigInt(11234),
    'lorem ipsum'
]

for (let i of primitives) {
    console.log(typeof i)
}

const objects = {
    a: {},
    b: function () {}, //function
    c: []
}

for (let key in objects) {
    console.log(typeof objects[key])
}
