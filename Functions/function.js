// function crearephrases() {
//     console.log("andar")
//     console.log("correr")
//     console.log("voar")
// }

// crearephrases()

// const sum = function(number1, number2) {
//     console.log(number1 + number2)
// }

// sum(2, 3)

// const sum = function(number1, number2) {
//     let total = number1 + number2
//     return total
// }

// let number1 = 34
// let number2 = 25

// console.log(`o numero 1 e ${number1}`)
// console.log(`o numero 2 e ${number2}`)
// console.log(`a soma e ${sum(number1, number2)}`)

// const sayMyName = () => {
//     console.log('Samuel')
// }

// sayMyName()

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " esta andando"
    }
}

const samuel = new Person('Samuel')
const john = new Person('John')
console.log(samuel.walk())
console.log(john.walk())

