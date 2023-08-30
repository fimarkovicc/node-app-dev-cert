function init(type) {
    let id = 0
    return (name) => {
        id++
        return { id, type, name }
    }
}

const professor = init('professor')
const student = init('student')

const dave = student('David')
const george = student('George')
const bob = professor('Bobby')
const elaine = student('Elaine')
const paul = professor('Paul')

console.log(dave)
console.log(george)
console.log(bob)
console.log(elaine)
console.log(paul)
