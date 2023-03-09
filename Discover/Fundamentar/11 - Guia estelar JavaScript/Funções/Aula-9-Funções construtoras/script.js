function Person(name) {
    this.name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const luiz = new Person("Luiz")
const samara = new Person("Samara")
console.log(luiz.walk())
console.log(samara.walk())

let name = new String("Luiz")
let number = new Number(1)
let date = new Date("2020-12-10")