// hi
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, age, address, phone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.show = function () {
        console.log("my name is:".concat(this.name, "\nmy age is: ").concat(this.age, "\naddress: ").concat(this.address, "\nphone: ").concat(this.phone));
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, address, phone, lecture, subject) {
        var _this = _super.call(this, name, age, address, phone) || this;
        _this.lecture = lecture;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.show = function () {
        console.log("my name is: ".concat(this.getName, " lecture:").concat(this.lecture, " subject ").concat(this.subject));
    };
    return Teacher;
}(Person));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, address, phone, grades) {
        var _this = _super.call(this, name, age, address, phone) || this;
        _this.grades = grades;
        return _this;
    }
    Student.prototype.show = function () {
        var sum = 0;
        this.grades.forEach(function (grade) {
            return sum += grade;
        });
        console.log("".concat(this.getName, " My total grade: ").concat(sum));
    };
    return Student;
}(Person));
var personObject = new Person('ahmed', 20, 'helwan', '01019278438');
personObject.show();
var teacherObject = new Teacher('ahmed', 20, 'helwan', '01019278438', 'cs', 'cs');
teacherObject.show();
var studentObject = new Student('ahmed', 20, 'helwan', '01019278438', [10, 20, 30, 40]);
studentObject.show();
studentObject.setName = 'ali';
studentObject.show();
// const studentObject = new Student('ahmed',20,'helwan','01019278438', [10,20,30,40])
// console.log(studentObject.getName())
