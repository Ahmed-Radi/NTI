const person= {
    name: 'ahmed',
    age: 25
}

const personJSON = JSON.stringify(person)
// console.log(personJSON)

const fs = require('fs')
fs.writeFileSync('person.json', personJSON) // step 3

console.log(fs.readFileSync('person.json').toString()) // step 4
let readPersonJSON = fs.readFileSync('person.json').toString()// step 4

const personOBJ = JSON.parse(readPersonJSON) // step 5

personOBJ.name = 'ali'; // step 6
personOBJ.age = 21; // step 6
console.log(personOBJ) // step 6

const personJSON2 = JSON.stringify(personOBJ) // step 7
console.log(personJSON2) // step 7

fs.writeFileSync('person.json', personJSON2)
console.log(fs.readFileSync('person.json').toString())