const fs = require('fs')

// Version1
const addNote = (title,body) =>{
    const notes = loadNotes() // []  // [{title:"task1",body:"body1"}]
    notes.push(      // [{title:'task1',body:'body1'},{title:'task2',body:'body2'}]
        {
            title,
            body
        }
    ) // [{title:'note1',body:'body1'}]
    saveNotes(notes)
}

const loadNotes = () => {
    // error begining of program
    // const dataBuffer = fs.readFileSync('notes.json').toString()
    // return JSON.parse(dataBuffer)
    try{
        //  [{"title":"task1","body":"body1"}]
        const dataBuffer = fs.readFileSync('notes.json').toString()
    return JSON.parse(dataBuffer)  //  [{title:"task1",body:"body1"}]
    }
    catch(e){
        return []
    }

}

const saveNotes = (notes) =>{
    // [{title:'task1',body:'body1'}]  ==> [{"title":'task1',"body":'body1'}]
    // [{title:'task1',body:'body1'},{title:'task2',body:'body2'}] ==> [{"title":'task1',"body":'body1'},{"title":'task2',"body":'body2'}]
const saveData = JSON.stringify(notes)   
// console.log(saveData)
fs.writeFileSync('notes.json',saveData)

}

module.exports = {
    addNote
}