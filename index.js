class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    sayName () {
        return `My name is ${this.name}`
    }
    sayAge () {
        return `My age is ${this.age}`
    }
}

export default Person;