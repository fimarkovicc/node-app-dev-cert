class Person {
    constructor(name) {
        this.name = name
    }
    ability() {
        console.log(this.name, 'speaks')
    }
}

class Student extends Person {
    constructor(name, major) {
        super(name + ' the student')
        this.major = major
    }
    studies() {
        console.log(this.name + ' studies ' + this.major)
    }
}

class ClassMemeber extends Student {
    constructor(name, major, classType) {
        super(name, major)
        this.classType = classType
    }
    enrolledIn() {
        console.log(
            this.name +
                ' studies ' +
                this.major +
                ' and is in class ' +
                this.classType
        )
    }
    studies() {
        console.log(this.name + 'does not study ' + this.major)
    }
}

const person1 = new Person('Bobby')
const student1 = new Student('George', 'Math')
const classMember1 = new ClassMemeber('Elaine', 'Biology', 'IV')

console.log(person1.name)
person1.ability()

console.log(student1.name)
student1.ability()
student1.studies()

console.log(classMember1.name, classMember1.major, classMember1.classType)
classMember1.ability()
classMember1.studies()
classMember1.enrolledIn()
