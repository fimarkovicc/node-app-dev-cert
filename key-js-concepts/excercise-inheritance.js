// TODO:
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow method

import assert from 'assert'

// Class based method

// class Leopard {
//     hiss() {
//         console.log('hisss')
//     }
// }

// class Lynx extends Leopard {
//     purr() {
//         console.log('puuurrr')
//     }
// }

// class Cat extends Lynx {
//     meow() {
//         console.log('meowww')
//     }
// }

// Prototype based

function Leopard() {}

function Lynx() {}

function Cat() {}

Leopard.prototype.hiss = () => {
    console.log('hissss')
}

Lynx.prototype.purr = function () {
    console.log('purrr')
}
Cat.prototype.meow = function () {
    console.log('meowwww')
}

Object.setPrototypeOf(Cat.prototype, Lynx.prototype)
Object.setPrototypeOf(Lynx.prototype, Leopard.prototype)

// CHECKS

const felix = new Cat() //TODO replace null with instantiation of a cat
felix.meow() // prints Felix the cat: meow
felix.purr() // prints Felix the cat: prrr
felix.hiss() // prints Felix the cat: hsss
// prototype checks, do not remove
const felixProto = Object.getPrototypeOf(felix)
const felixProtoProto = Object.getPrototypeOf(felixProto)
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto)
assert(Object.getOwnPropertyNames(felixProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1)
assert(typeof felixProto.meow, 'function')
assert(typeof felixProtoProto.purr, 'function')
assert(typeof felixProtoProtoProto.hiss, 'function')
console.log('prototype checks passed!')
