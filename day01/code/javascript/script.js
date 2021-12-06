// Data types
// string
// num
// boolean
let firstName = "Omar"
console.log(firstName)

let age = 20
console.log(age)

let accepted = true
console.log(accepted)

///////////////////////////////////////////////////////////////////////////////

// Naming conventions
// Can't start with no
// no space
// reserved word

////////////////////////////////////////////////////////////////////////////////

// JS is case sensitive

let lastName = "Amr"
console.log(lastName)

let LastName ="osama"
console.log(LastName)

///////////////////////////////////////////////////////////////////////////////

// const variables

const value = 50
// value = 60
console.log(value)

// JS is interprted language (excute line by line)
console.log("Message")

///////////////////////////////////////////////////////////////////////////////

// Opertors
// Arthmatic operators
// + - / * % **

let num1 =3
let num2 =2

let result = num1 + num2
console.log(result)

result = num1 - num2
console.log(result)

result = num1 * num2
console.log(result)

result = num1 / num2
console.log(result)

result= num1 % num2
console.log(result)

result = num1 ** num2
console.log(result)

///////////////////////////////////////////////////////////////////////////////

// Assigment opertators
// = += -= /= *= %=

num1 += 5 // num1 = num1 + 5

/////////////////////////////////////////////////////////////////////////////////

// Comparion operator

// == === != !== > >= < <=

num1 = 7
num2 = 9
console.log(num1 !== num2) // true

///////////////////////////////////////////////////////////////////////////////

// logical operators
// && ||

/////////////////////////////////////////////////////////////////////////////


// Post increment ,decrepemnt
// pre increment ,decrepemnt

// z++ --> post
// ++z --> pre

let z = 1
console.log(z++) // 1          // 2
console.log(++z) // 3

/////////////////////////////////////////////////////////////////////////////

// precednce
/**
 * ()
 * ++ --
 * * /
 * + - 
 * =
 */

///////////////////////////////////////////////////////////////////////////////////

// conditions

/**
 * if(condition){
 * }
 * else{
 * }
 */

let test = 5
if(test ==0){
    console.log("Number is equal to zero")
}
else if(test>10){
    console.log("Number is greater than 10")
}
else{
    console.log("NUmber is less than 10")
}

/////////////////////////////////////////////////////////////////////////////

// DOM elements 
document.getElementById("paragarah").textContent = "Grading System"
/////////////////////////////////////////////////////////////////////////////

// Task
// Grading system
// Take 2 input user (name/mark)
// prompt / 
// condition mark
// A ==> 100 / 90
// B ==> 90 / 85
// C ==> 85 / 70
// D ==> 70 /60
// F ==> otherwise

// parseInt('35xyz') ==> 35
// Number('35xyz') ==> NAN

// let studentName = prompt('Enter your name')
// let mark = parseInt(prompt('Enter your mark'))

// if(mark <=100 && mark>=90){
//     document.getElementById('grading').innerText = studentName + ' Your grade is A'
// }
// else if(mark<90 && mark>=85){
//     document.getElementById('grading').innerText = studentName + ' Your grade is B' 
// }
// else if(mark<85 && mark>= 70){
//     document.getElementById('grading').innerText = studentName + ' Your grade is C'
// }
// else if(mark<70 && mark>=60){
//     document.getElementById('grading').innerText = studentName + ' Your grade is D'
// }
// else{
//     document.getElementById('grading').innerText = studentName + ' Your grade is F'
// }
/////////////////////////////////////////////////////////////////////////////////

// Difference between innerText / innerHTML / textContent

let p = document.getElementById('experiment')
console.log(p.innerText)
console.log(p.innerHTML)
console.log(p.textContent)

////////////////////////////////////////////////////////////////////////////////


// Switch
const country = "Egypt"
switch(country){
    case "Egypt":
        console.log("It is 30 deg")
        break;
    case "London":
        console.log("It is 20 deg")
        break;
    case "Paris":
        console.log("It is 10 deg")
        break;
    default:
        console.log("Temp is undefined")
}
///////////////////////////////////////////////////////////////////////////////

// loops
// for loop
// for(intzalization ; contdition ; increment)

for(let i =0 ;i<=10;i++){
    if(i%2 == 0){
        console.log(i + " is even")
    }
}

// while loop

let i = 0 // intalization

// condition
while(i<=10){
if(i % 2 ==1){
    console.log(i + " is odd")
}
i++ // increment
}  

/////////////////////////////////////////////////////////////////////////////////

// functions

function add(a,b){
    return a +b
}

console.log(add(4,4))

// Arrow function
// let add1 = (a,b) => {
//     return a +b
// }

// console.log(add1(5,5))

// let add1 = 5
let add1 = (a,b) => a + b
console.log(add1(5,3))

function measures (uName,h,w){
    console.log(uName)
    return h + w
}

let measures1 = (uName,h,w)=>{
    console.log(uName)
    return h + w
}

console.log(measures1('Omar',165,80))

///////////////////////////////////////////////////////////////////////////////


let maxNo = (a,b) =>{
    if(a>b){

        return a + ' is greater than ' + b
    }
    console.log("Message")
    return b + ' is greater than ' + a
    
}
console.log(maxNo(3,5))

/////////////////////////////////////////////////////////////////////////////////

// Arrays
let fruits = ["Orange","Apple","Grapes"]
console.log(fruits[0])

for(let i=0; i<fruits.length;i++){
    console.log(fruits[i])
}

// forEach

fruits.forEach((fruit)=>{
    console.log(fruit)
})


/////////////////////////////////////////////////////////////////////////////////

// Objects (key/value)

let user = {
    name:'Ali',
    age:20,
    email:'ali@gmail.com'
}

// Dot Notation
user.name = 'Omar'
console.log(user.name)

// Bracket Notation
user["name"] = 'Hamza'
console.log(user["name"])

let selection = "name"
user[selection] = "Zain"

// user.selection = "test"
console.log(user)

/////////////////////////////////////////////////////////////////////////////

document.getElementById('myForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    let u = document.getElementById('text1').value // key -->name / email
    // console.log(u)
    // add new property (u)
    // user.u = document.getElementById('value1').value 
     user[u] = document.getElementById('value1').value  // user[email]='amr@gmail.com'
    console.log(user)
})
//////////////////////////////////////////////////////////////////////////////


// for in / for of

// for in -->better object

for (let x in user){
    console.log(x,user[x])
}

// for of --> array (values)
const numbers = [1,2,3,4,5,10]

for(let number of numbers){
    console.log(number)
}

// for in (index)
for(let number in numbers){
    console.log(number)
}

/////////////////////////////////////////////////////////////////////////////////
// shorthand property

let uName = "Omar"
let uAge = 30

let person = {
    uName,  // uName:uName
    agePerson:uAge

}

console.log(person)

///////////////////////////////////////////////////////////////////////////////

// Array of object

let students = [
    {
        name:'Omar',
        age:15,
        math:15,
        arabic:17,
        eng:18,
        degrees:[15,17,18]

    },
    {
        name:'Maged',
        age:17,
        math:20,
        arabic:13,
        eng:16,
        degrees:[20,13,16]

    },
    {
        name:'Osama',
        age:17,
        math:11,
        arabic:17,
        eng:15,
        degrees:[11,17,15]

    }
]

// Task 
// forEach name of student // sum = degrrees --> 
// Omar
// 40

students.forEach((el)=>{
    console.log(el.name)
    sum = 0
    // [15,17,18]
    el.degrees.forEach((deg)=> sum+= deg) // sum = sum + deg = 32 + 18 = 50
    console.log(sum)

})

////////////////////////////////////////////////////////////////////////
// search
// find / filter
// s--> obj
// first appereance --> satisfy condition

const s = students.find((s)=> s.age ==17)
console.log(s)


// filter --> new array condition
const u = students.filter((s)=>s.age == 17)
console.log(u)

//////////////////////////////////////////////////////////////////////////////////////

// Advanced Javascript
// Callback (Sync/Async) 
// callback --> function passed as an argument to another function

// Sync
// function displayResult(sum) {
//     console.log("Result is " + sum)
// }

// function sumCalculation (num1,num2,myCallback){
//     let sum = num1 + num2 // 10
//     myCallback(sum)
// }

// sumCalculation( 5,5,displayResult )



function sumCalculation (num1,num2,myCallback){
    let sum = num1 + num2 // 10
    myCallback(sum)
}

sumCalculation( 5,5,(sum)=>{
    console.log('Result is ' + sum)
})

////////////////////////////////////////////////////////////////////////////

// Async

// console.log('First')

// const message = () => console.log('This msg is shown after 3 second')

// setTimeout(message,3000)

// console.log('Last')


// console.log('First')
// // Annyoums funcion
// setTimeout(()=>{
//     console.log('This msg is shown after 3 second')
// },3000)
// console.log('Last')



///////////////////////////////////////////////////////////////////////////////////

// callback hell --> Promise (then/catch)

let myPromise = new Promise((resolve,reject)=>{
    if(3<2){
        resolve("Right!!!!!!")
    }
    reject("Wrong")
})

myPromise
.then((data)=>console.log(data))
.catch((e)=>{console.log(e)})

console.log('Mesageeeeeeeee')
////////////////////////////////////////////////////////////////////////////////////

// async / awiat


// async --> function return promise
// await --> make function wait for promise

// let hello  = async() =>{
//     if(5 !==5){
//         return greeting = await Promise.resolve("Hellooo")
//     }
//     return greeting = await Promise.reject("Error")
// }
// hello().then((data)=>{
//     console.log(data)
// }).catch((e)=>{console.log(e)})

/////////////////////////////////////////////////////////////////////////////////

// fetch

// async / await

// async --> function return promise
// await --> make function wait for promise


let fetchUsers = async () =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users') //////
        // console.log(res)
        const data = await res.json() /////////
        console.log(data)
    }
    catch(e){
        alert(e)
    }
}

// Promise
// let fetchUsers1 =  () =>{
//          fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res)=>{
//             return res.json()
//         })
//         .then((data)=>{
//             console.log(data)
//         })
//         .catch((e)=>{
//             console.log(e)
//         })
       

// }
  
// fetchUsers1()

















