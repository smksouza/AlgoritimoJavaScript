//console.log('bem vindos ao Starter')
// console.log(12.5)
// console.log({
//     name: "samuel",
//     idade: 20,
//     andar: function(){
//         console.log("andar")
//     }
// })

// var name

// name = 'samuel'

// console.log(typeof name)


// let age, isHuma

// age = 20
// isHuma = true

//console.log(name,age,isHuma)

//console.log('o ' + name + ' tem ' + age + ' anos')

//console.log(`o ${name} tem ${age} anos`)

// const person = {
//     name: "Samuel",
//     age: 20,
//     weight: 95,
//     isAdmin: true
// }

// console.log(person.name)

// const animals = [
//     'Lion',
//     'Monkey',
//     {
//      name: 'Cat',
//      age: 3
//     }
// ]
// console.log(animals[2])

let student = {
    name: 'Samuel',
    age: 20,
    weight: 94.5,
    isSubscribed: true,
};
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

let students = []

students = [
    student
]

console.log(students[0])

const john = {
    name: 'jonathan',
    age: 24,
    weight: 89.5,
    isSubscribed: true
}

students[1] = john

console.log(students[1])