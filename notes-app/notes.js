const fs = require('fs')
const chalk = require('chalk')


const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote){
        notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log('New note added')
    } else {
        console.log('Note title taken')
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if (notes.length > notesToKeep.length) {
        console.log(chalk.white.bgGreen('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.white.bgRed('No note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log('Your notes')
    notes.forEach((note) => {
    console.log(note.title)
})
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note){
        console.log(note.title)
        console.log(note.body)
    } else {
    console.log('Note not found')
}
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};

