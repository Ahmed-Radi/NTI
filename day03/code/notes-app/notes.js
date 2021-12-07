const fs = require('fs');

const fs = require("fs");

// Version1
// const addNote = (title,body) =>{
//     const notes = loadNotes() // []  // [{title:"task1",body:"body1"}]
//     notes.push(      // [{title:'task1',body:'body1'},{title:'task2',body:'body2'}]
//         {
//             title,
//             body
//         }
//     ) // [{title:'note1',body:'body1'}]
//     saveNotes(notes)
// }

//////////////////////////////////////////////////////////////////////////////////

// Version 2

const addNote = (title, body) => {
  const notes = loadNotes(); // [{title:"note1",body:"body1"},{title:"note2",body:"body2"},{title:"note3",body:"body2"}]
  // new array -->  criteria (condition)
  const duplicateTitles = notes.filter((note) => {
    // note1 === note3 F  // {title:"note1",body:"body1"}
    // note2 === note3  F // {title:"note2",body:"body2"}
    // note3 === note3 T 
    return note.title === title;
  });
  console.log(duplicateTitles);
  console.log(duplicateTitles.length);

  if (duplicateTitles.length === 0) {
    notes.push(
      // [{title:'task1',body:'body1'},{title:'task2',body:'body2'}]
      {
        title,
        body,
      }
    );
    saveNotes(notes);
    console.log("Saved Successfully");
  } else {
    console.log("Error duplicate title");
  }
};

/////////////////////////////////////////////////////////////////////////////////////

const loadNotes = () => {
  // error begining of program
  // const dataBuffer = fs.readFileSync('notes.json').toString()
  // return JSON.parse(dataBuffer)
  try {
    //  [{"title":"task1","body":"body1"}]
    const dataBuffer = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataBuffer); //  [{title:"task1",body:"body1"}]
  } catch (e) {
    return [];
  }
};

///////////////////////////////////////////////////////////////////////////////////

const saveNotes = (notes) => {
  // [{title:'task1',body:'body1'}]  ==> [{"title":'task1',"body":'body1'}]
  // [{title:'task1',body:'body1'},{title:'task2',body:'body2'}] ==> [{"title":'task1',"body":'body1'},{"title":'task2',"body":'body2'}]
  const saveData = JSON.stringify(notes);
  // console.log(saveData)
  fs.writeFileSync("notes.json", saveData);
};
//////////////////////////////////////////////////////////////////////////////////

const deleteNote = (title) =>{
    const notes = loadNotes()
    /**
     * [
  { title: "note1", body: "body1" },
  { title: "note2", body: "body2" },
  { title: "note3", body: "body2" },
  { title: "note4", body: "body2" }
]
     */
    // new array --> based on condititon
    const notesToKeep = notes.filter((note)=>{
        // note1 !== note2 T
        // note2 !== note2 F
        // note3 !== note2 T
        // note4 !== note2 T
        return note.title !== title
    })
    console.log(notes)
    console.log(notesToKeep)
    saveNotes(notesToKeep)
    console.log('Removed')

}
/////////////////////////////////////////////////////////////////////////////////

const readNote = (title) => {
const notes = loadNotes()
  /**
     * [
  { title: "note1", body: "body1" },
  { title: "note3", body: "body2" },
  { title: "note4", body: "body2" }
]
     */
const note = notes.find((note)=>{
    // note1 === note3 F
    // note3 === note3 T
    // note4 === note3
    return note.title === title
})
console.log(note)
if(note){
    console.log(note.body)
}
else{
    console.log('Sorry not found')
}
}
//////////////////////////////////////////////////////////////////////////////

// 
const listN = () =>{
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(note.title,note.body)
    })
    // console.log(notes)
}

module.exports = {
  addNote,
  deleteNote,
  readNote,
  listN
};
