const fs = require('fs')

const createNotes = (title,body) => {
    const notes = loadNotes()
    notes.push({
        title,
        body
    })
    saveNotes(notes)
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

module.exports = {
    createNotes
};