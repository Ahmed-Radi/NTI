// const car = {
//     name:'BMW',
//     color:'Black'
// }
// // console.log(car.name)
// // console.log(car)
// // convert object to json --> stringfy

// const carJson = JSON.stringify(car)
// // console.log(carJson)
// // console.log(carJson.name)


// // JSON --> object (parse)

// const carObject = JSON.parse(carJson)
// console.log(carObject)
//////////////////////////////////////////////////////////////////////////////

const fs = require('fs')
// error --> we can't add object in json file
// fs.writeFileSync('cars.json',car)

// fs.writeFileSync('cars.json',carJson)

// console.log(fs.readFileSync('cars.json').toString())

////////////////////////////////////////////////////////////////////////////////

/**
 * Task
 * 1) create object person name age
 * 2) object --> json
 * 3) writeFileSync -->
 * 4)readFileSync
 * 5) json --> object
 * 6) update
 * 7) object --> json
 * 8) writeFileSync
 */

const person = {
    name:'Yassin',
    age:35
}

const personJson = JSON.stringify(person)
console.log(personJson)

fs.writeFileSync('person.json',personJson)

const dataBuffer = fs.readFileSync('person.json').toString()
console.log(dataBuffer)

const obj = JSON.parse(dataBuffer)
console.log(obj)
obj.name = 'Osama'
obj.age = 40

const userJson = JSON.stringify(obj)

fs.writeFileSync('person.json',userJson)