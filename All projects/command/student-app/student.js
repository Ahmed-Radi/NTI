const fs = require('fs');

const addStudent = (id, name, grades, comments, total) => {
    const students = loadStudent();
    const duplicateID  = students.filter(student => {
        return id === student.id
    })
    if (duplicateID.length === 0) {
        students.push({id, name, grades, comments, total});
        saveStudent(students);
        console.log("Saved Successfully");
    } else {
        console.log("Error duplicate ID");
    }

};

const loadStudent = () => {
    try{
        const studentJSON = fs.readFileSync('student.json');
        return JSON.parse(studentJSON); // convert from JSON to OBJ
    }catch (e) {
        return [];
    }
};

const saveStudent = (student) => {
    const studentJSON = JSON.stringify(student)
    fs.writeFileSync('student.json', studentJSON)
};

// Read with id
const readStudent = (studentId) => {
    const students = loadStudent();
    const student = students.find(student => {
        return student.id === studentId;
    })
    console.log('--------------------------------------------');
    console.log(`Student ID: ${student.id}, Student Name: ${student.name}, Student Grade: ${student.grades}, Student Comment: ${student.comments}, Student Total: ${student.total}`);
    console.log('--------------------------------------------');
};

// Read without id
// const readStudent = () => {
//     const students = loadStudent();
//     students.forEach(student => {
//         console.log(`Student ID: ${student.id}, Student Name: ${student.name}, Student Grade: ${student.grades}, Student Comment: ${student.comments}, Student Total: ${student.total}`)
//         console.log('----------------------------------------');
//     });
// };

// Delete
const removeStudent = (studentId) => {
    const students = loadStudent();
    const student = students.filter( student => {
        return student.id !== studentId;
    })
    if (students > student) {
        saveStudent(student);
    } else {
        console.log('Please enter valid ID');
    }
};

// List
const listStudent = () => {
    const students = loadStudent();
    students.forEach(student => {
        console.log(`Student Name: ${student.name}, Student Total: ${student.total}`);
        console.log('--------------------------------------------');
    });
};

module.exports = {
    addStudent,
    readStudent,
    listStudent,
    removeStudent,
}