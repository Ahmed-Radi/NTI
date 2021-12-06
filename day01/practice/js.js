// let name = prompt('please Enter your name');
// let degree = parseInt(prompt('please Enter your degree'))

// let grade;
// if (degree >= 90) {
//     // console.log('A')
//     grade = 'A'
// } else if (degree <= 89 && degree >= 85) {
//     // console.log('B')
//     grade = 'B'
// } else if (degree <= 84 && degree >= 70) {
//     // console.log('C')
//     grade = 'C'
// } else if (degree <= 69 && degree >= 50) {
//     // console.log('D')
//     grade = 'D'
// } else {
//     // console.log('F')
//     grade = 'F'
// }

// document.getElementById('output').textContent = `Hi ${name} your degree is: ${degree} and your ${grade}`

let i = 0;
while(i<=10){
    if(i % 2 !== 0){
        console.log(i)
    }
    i++;
}

let measures = (uName,h,w) => {
    console.log(uName)
    return h + w;
}
console.log(measures('Ahmed', 10,20))

let fruit = ['o','a','g']
for(let i=0;i < fruit.length;i++) {
    console.log(fruit[i])
}
let user = {
    name: 'a',
    age: 20,
    email:'ahmed@gmail.com'
}

for (let x in Object.keys(user)) {
    console.log(x)
}

///////////////////////////////////////////////////////////////

students = [
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
let sum = 0;
students.forEach((student) => {
    console.log(student.name)
    sum = 0
    student.degrees.forEach((degree) => sum+=degree)
    console.log(sum)
})

setTimeout(()=>console.log("hii"),2000)