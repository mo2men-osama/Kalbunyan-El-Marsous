// Section 5: JavaScript Objects
// Lecture # 2
// 28.Object Basics

// Challenge # 1:

// name, age, location

// Andrew is 27 and lives in Philadelphia
// Increase age by 1 and print message again

let person = {
    name: 'Moamen',
    age: 19,
    location: 'Cairo'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)