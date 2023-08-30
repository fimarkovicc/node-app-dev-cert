'use strict'

function prefixer(salute) {
    let salutation
    return function (name) {
        salutation = salute
        return salutation + name
    }
}

const sayHiTo = prefixer('Hello ')
const sayByeTo = prefixer('Goodbye ')
console.log(sayHiTo('Dave'))

console.log(sayHiTo('Annie'))
console.log(sayByeTo('Dave'))
