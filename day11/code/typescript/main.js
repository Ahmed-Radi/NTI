"use strict";
// npm i typescript -g
// tsc main.ts (create js file)
// tsc -init (create tsconfig.json responsible to transfer ts to js)
// tsc -w (watch any change in ts , write it down js)
// error
// let count =5
// count = 'osama'
let userName = 'Amr';
console.log(userName);
let age = 32;
console.log(age);
let y = true;
console.log(y);
let a;
a = 1;
a = 'mostafa';
a = true;
//x prompt
// msg 
// let x:any = prompt('Enter your name')
// let msg:string = 'Hello' + x
// alert(msg)
////////////////////////////////////////////////////////////////////////////
// Array 
let cities = ['Egypt', 'london'];
let a1 = ['egypt', 5, true];
let t1 = ['egypt', 7];
////////////////////////////////////////////////////////////////////////////////////
function add(x, y) {
    return x + y;
}
let arrFun = (a, b) => {
    return a + b;
};
console.log(arrFun(5, 5));
////////////////////////////////////////////////////////////////////////////////
// Object oriented 
// Encapsulation
// Inheritence
// Polymorhism
// Abstarction
// class User{
//     // properties
//     name:string
//     age:number
//     address:string
//     // Inatlize object
//     // name --> 'Osama'
//     // age --> 20
//     constructor(name:string,age:number,address:string){
//         this.name = name
//         this.age = age
//         this.address = address
//     }
// }
// let userObject = new User('Osama',20,'doki')
// userObject.name = 'Yassin'
// console.log(userObject)
// let userObject1 = new User('Youssef',30,'madii')
///////////////////////////////////////////////////////////////////////////
// Encapsulation (properties private setter & getters (set/get))
// class User{
//     // properties
//     private name:string
//     private age:number
//     private address:string
//     // Inatlize object
//     // name --> 'Osama'
//     // age --> 20
//     constructor(name:string,age:number,address:string){
//         this.name = name
//         this.age = age
//         this.address = address
//     }
//     print():void{
//         console.log('Hello' + this.name + ' Your age is ' +this.age)
//     }
//     // Yassin
//     set setName(x:string){
//         this.name = x  // this.name = 'Yassin'
//     }
//     get getName(){
//         return this.name
//     }
// }
// let userObject = new User('Osama',20,'doki')
// // userObject.age
// // userObject.name
// // userObject.address
// userObject.setName = 'Yassin'
// console.log(userObject.getName)
// userObject.print()
// let userObject1 = new User('Youssef',30,'madii')
///////////////////////////////////////////////////////////////////////////
class User {
    // properties
    // private name:string
    // private age:number
    // private address:string
    // Inatlize object
    // name --> 'Osama'
    // age --> 20
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        // this.name = name
        // this.age = age
        // this.address = address
    }
    print() {
        console.log('Hello' + this.name + ' Your age is ' + this.age);
    }
    // Yassin
    set setName(x) {
        this.name = x; // this.name = 'Yassin'
    }
    get getName() {
        return this.name;
    }
}
let userObject = new User('Osama', 20, 'doki');
// userObject.age
// userObject.name
// userObject.address
userObject.setName = 'Yassin';
console.log(userObject.getName);
userObject.print();
let userObject1 = new User('Youssef', 30, 'madii');
////////////////////////////////////////////////////////////////////////////////////
// Inheritence
// Polymorhishm
/**
 * (Overload) // Js not supported (Same function name differnet parameters)
 *
 * function add(x:number,y:number){
 * }
 *
 * function add(x:number,y:number,z:number){
 * }
 *
 * (Override)
 *
 * Function parent signature/ function header --> change body
 */
//Parent
class Animal {
    constructor(name) {
        this.name = name;
    }
    moveAnimal(moveScore) {
        console.log(`Moves ${moveScore}`);
    }
}
// child
class Cat extends Animal {
    constructor(type, name) {
        super(name);
        this.type = type;
    }
    moveAnimal(moveScore) {
        console.log(`Cat Moves ${moveScore}`);
    }
    sound() {
        console.log('meow');
    }
}
let animalObject = new Animal('test');
animalObject.moveAnimal(5);
let catObject = new Cat('sharzee', 'rocky');
catObject.moveAnimal(10);
////////////////////////////////////////////////////////////////////////////////
// class Person
// name age address phone
// set get name age 
// show name age address phone 
// class teacher --> person
// lecture / subject 
// override show my name is / lecture ... subject ...
// class student --> person
// grades --> array of number
// show forEach total grade
// 3 object person / teacher / student
// change name of student
class Person {
    constructor(name, age, address, phone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    show() {
        console.log(`My name is ${this.name} & my age is ${this.age} & address is ${this.address}`);
    }
    set setName(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
}
class Teacher extends Person {
    constructor(name, age, address, phone, lecture, subject) {
        super(name, age, address, phone);
        this.lecture = lecture;
        this.subject = subject;
    }
    show() {
        console.log(`My name is ${this.getName} & I have lecture ${this.subject} in ${this.lecture}`);
    }
}
class Student extends Person {
    constructor(name, age, address, phone, grades) {
        super(name, age, address, phone);
        this.grades = grades;
    }
    show() {
        let sum = 0;
        this.grades.forEach((grade) => {
            sum += grade; // sum = sum + grade
        });
        console.log(`My total grade is ${sum}`);
    }
}
let personObject = new Person('Osama', 23, 'doki', '03473287432');
personObject.show();
let teacherObject = new Teacher('Zain', 50, 'maddi', '3248932894732', '2B', 'math');
teacherObject.show();
let studentObject = new Student('Moahmed', 15, 'nasrcity', '3234324', [10, 12, 14]);
studentObject.setName = 'Mahmoud';
console.log(studentObject.getName);
studentObject.show();
