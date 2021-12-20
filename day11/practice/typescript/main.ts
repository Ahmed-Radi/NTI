// hi

// let x:any = prompt('Enter you message')
// let message: string = 'Enter' + x
// alert(message)

// const add = (x:number,y:number):number => {
//     return x+y
// }
// console.log(add(5,5))

// class User {
//     // private name:string
//     // private age:number
//     // private address:string

//     constructor(private name:string, private age:number, private address:string) {}
//     print():void {
//         console.log('Hello' + this.name + 'your age' + this.age)
//     }
//     set setAge(age:number) {
//         this.age = age
//     }
//     get getAge(){
//         return this.age
//     }
//     set setAddress(address:string) {
//         this.address = address
//     }
//     get getAddress(){
//         return this.address
//     }
// }

// const nweObject = new User('ahmed',20,'aaaa');
// console.log(nweObject);
// nweObject.setAge = 55
// console.log(nweObject);
// nweObject.setAddress = 'helwan'
// console.log(nweObject);


class Person {
    private name:string;
    private age:number;
    private address:string;
    private phone:string

    constructor(name:string, age:number, address:string, phone:string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }

    set setName(name:string) {
        this.name = name
    }

    get getName() {
        return this.name
    }
    show():void {
        console.log(`my name is:${this.name}\nmy age is: ${this.age}\naddress: ${this.address}\nphone: ${this.phone}`);
    }
}

class Teacher extends Person {
    lecture:string;
    subject:string;
    constructor(name:string, age:number, address:string, phone:string, lecture:string, subject:string){
        super(name, age, address, phone)
        this.lecture = lecture
        this.subject = subject
    }
    show():void {
        console.log(`my name is: ${this.getName} lecture:${this.lecture} subject ${this.subject}`);
    }
}

class Student extends Person {
    grades: number[];
    constructor(name:string, age:number, address:string, phone:string, grades:number[]){
        super(name,age, address, phone);
        this.grades = grades
    }

    show():void {
        let sum:number = 0;
        this.grades.forEach(grade =>
            sum += grade
        );
        console.log(`${this.getName} My total grade: ${sum}`)
    }
}

const personObject = new Person('ahmed',20,'helwan','01019278438')
personObject.show()
const teacherObject = new Teacher('ahmed',20,'helwan','01019278438', 'cs', 'cs')
teacherObject.show()
const studentObject = new Student('ahmed',20,'helwan','01019278438', [10,20,30,40])
studentObject.show()
studentObject.setName='ali'
studentObject.show()

// const studentObject = new Student('ahmed',20,'helwan','01019278438', [10,20,30,40])
// console.log(studentObject.getName())
