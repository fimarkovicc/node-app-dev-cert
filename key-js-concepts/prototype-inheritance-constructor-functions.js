// prototype inheritance using constructor functions

function Wolf(name) {
    this.name = name
    this.species = 'wolf'

    this.howl = function () {
        console.log(this.name, ' hooooooowl')
    }
}

Wolf.prototype.howl = function () {
    console.log(this.name, 'hoooowl')
}

function Dog(name) {
    Wolf.call(this, name)
    this.species = 'dog'
}

Object.setPrototypeOf(Dog.prototype, Wolf.prototype)

function Beagle(name) {
    Dog.call(this, name)
}

Object.setPrototypeOf(Beagle.prototype, Dog.prototype)

const wolf = new Wolf('BobWolf')
const dog = new Dog('TomDog')
const beagle = new Beagle('CharlieBeagle')

console.log(beagle.__proto__.__proto__.__proto__.__proto__.__proto__ === null)

console.log(beagle.__proto__.__proto__ === dog.__proto__)
console.log(dog.__proto__.__proto__ === wolf.__proto__)
console.log(wolf.__proto__.__proto__ === {}.__proto__)
console.log({}.__proto__.__proto__ === null)

console.log(beagle.__proto__ === Beagle.prototype)
console.log(Object.getPrototypeOf(Beagle.prototype) === Dog.prototype)
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype)

console.log(Object.getPrototypeOf(beagle) === Beagle.prototype)
console.log(Object.getPrototypeOf(Dog.prototype) === Wolf.prototype)

console.log(beagle.name, beagle.species)
beagle.howl()
console.log(dog)
console.log(dog.name, dog.species, Dog.prototype, dog.__proto__)
dog.howl()
console.log(wolf)
console.log(wolf.name, wolf.species, Wolf.prototype, wolf.__proto__)
wolf.howl()
