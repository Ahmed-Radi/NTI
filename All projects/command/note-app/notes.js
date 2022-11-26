const fs = require('fs')

const createNotes = (title,body) => {
    const notes = loadNotes()
    const noteDuplicate = notes.filter((note) => {
        return note.title === title;
    })
    // const noteDuplicate = notes.filter((note) => note.title === title)
    if (noteDuplicate.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log('Notes Saved')
    } else {
        console.log('Notes don"t Saved')
    }
}

const loadNotes = () => {
    try {
        const notesJSON = fs.readFileSync('notes.json');
        return JSON.parse(notesJSON)
    }catch (err) {
        return []
    }
}

const saveNotes = (notes) => {
    const noteJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', noteJSON)
}

const deleteNote = (title) => {
    const notes = loadNotes();
    const nodeToKeep = notes.filter((note) => {
        return note.title !== title
    })
    /** Task if note wasn't deleted*/
    if (nodeToKeep.length < notes.length) {
        console.log('Note was removed');
    } else {
        console.log("Note wasn't removed");
    }
    saveNotes(nodeToKeep)
}


const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => {
        return note.title === title
    })
    if (note) {
        console.log('title: ' + note.title,'body: ' + note.body)
    } else {
        console.log('Sorry not defined')
    }
    // note ? console.log("title: " + note.title,'body: ' + note.body) : console.log('Sorry not defined')
}

const listNote = () => {
    const notes = loadNotes()
    notes.forEach((note,index) => {
        console.log(index + 1, 'title: ' + note.title, 'body: ' + note.body)
        console.log('---------------------')
    })
}

module.exports = {
    createNotes,
    deleteNote,
    readNote,
    listNote,
};