// //functional inheritance
// const animal = {
// 	type: 'animal',
// 	sound: function () {
// 		console.log(this.name + ' makes animal sound')
// 	},
// 	eats: function () {
// 		console.log(this.name + ' eats animal food')
// 	},
// }

// const dog = Object.create(animal, {
// 	sound: {
// 		value: function () {
// 			console.log(this.name + ' barks')
// 		},
// 	},
// })

// const barnie = Object.create(dog, {
// 	name: {
// 		value: 'Barnie',
// 	},
// })

// barnie.eats()
// barnie.sound()
// console.log('prototype of barnie is dog', Object.getPrototypeOf(barnie) === dog)
// console.log('prototype of dog is animal', Object.getPrototypeOf(dog) === animal)
// console.log(
// 	'prototype of animal is Object.prototype',
// 	Object.getPrototypeOf(animal) === Object.prototype,
// )
// console.log(
// 	'prototype of Object.prototype is null',
// 	Object.getPrototypeOf(Object.prototype) === null,
// )

// // constructor functions
// function Animal(type = 'animal') {
// 	this.type = type
// 	this.sound = function () {
// 		console.log(this.name + ' makes animal sound')
// 	}
// 	this.eats = function () {
// 		console.log(this.name + ' eats animal food')
// 	}
// }

// function Dog(name, type) {
// 	Animal.call(this, type)
// 	this.name = name
// 	this.sound = function () {
// 		console.log(this.name + ' barks')
// 	}
// }
// Object.setPrototypeOf(Dog.prototype, Animal.prototype)

// const barnie = new Dog('Barnie', 'a dog')
// console.log(barnie.name)
// barnie.eats()
// barnie.sound()
// console.log(barnie.type)

// console.log(Object.getPrototypeOf(barnie) === Dog.prototype) //true
// console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype)
// console.log(Object.getPrototypeOf(Animal.prototype) === Object.prototype)
// console.log(Object.getPrototypeOf(Object.prototype) === null)

// // Class based inheritance
// class Animal {
// 	constructor(type = 'animal') {
// 		this.type = type
// 	}
// 	sound() {
// 		console.log(this.name + ' makes animal sound')
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, type) {
// 		super(type)
// 		this.name = name
// 	}
// 	sound() {
// 		console.log(this.name + ' barks')
// 	}
// }

// const buster = new Dog('Buster', 'dog')
// console.log(buster.type, buster.name)
// buster.sound()
// console.log(Object.getPrototypeOf(buster) === Dog.prototype)
// console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype)
// console.log(Object.getPrototypeOf(Animal.prototype) === Object.prototype)
// console.log(Object.getPrototypeOf(Object.prototype) === null)

class Parent {
	constructor() {}
	method1 = function () {
		console.log('method 1')
	}
	method2 = function () {
		console.log('method 2')
	}
}

class Child extends Parent {
	constructor() {
		super()
	}
	method3 = function () {
		console.log('method 3')
	}
	method4 = function () {
		console.log('method 4')
	}
}

const obj = new Child()
obj.method1()
obj.method2()
obj.method3()
obj.method4()
// console.log(obj.__proto__.__proto__)
console.log(Object.getPrototypeOf(obj) === Child.prototype)
console.log(Object.getPrototypeOf(Child.prototype) === Parent.prototype)
console.log(Object.getPrototypeOf(Parent.prototype) === Object.prototype)
console.log(Object.getPrototypeOf(Object.prototype) === null)
