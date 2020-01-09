
// notes.js

const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString();  
        return JSON.parse(dataJSON);
    } catch (error) {
        console.log(error.name + ":" + error.message);
        console.log("After error, returning the object below:")
        return [];
    }
}

const listNotes = () => {
    try{
        const listNotes = loadNotes();
        console.log(chalk.blue("List of titles"));
        listNotes.forEach(listNote => {
            console.log(listNote.title);
        });
        // console.log(noteTitles)
    }
    catch(error){
        console.log(error.name + ":" + error.message);
    }
}

const addNote = (title, body) => {
    
    // console.log(notes);

    const notes = loadNotes()
    console.log(notes);
    const duplicateNotes = notes.filter((note) => note.title === title);

    debugger

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
    }
    else{
        console.log(chalk.red("Duplicate Note"));
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}

const removeNote = (title) => {
    const notes = loadNotes();
    // console.log("title is  " + title);
    // console.log(notes);

    const newNotes = notes.filter((note) => title !== note.title); 

    if(newNotes.length === notes.length){
        console.log(chalk.red("Provided title doesnt exist"))
    }
    else{
        saveNotes(newNotes);
        console.log(chalk.green("Note(s) with the provided title got removed"))
    }
    
    
};

const readNote = (title) => {
    // console.log(title);
    const notes = loadNotes();
    const noteFound = notes.find((note) => note.title === title);

    if(noteFound){
        console.log(chalk.green.inverse(noteFound.title))
        console.log(noteFound.body)
    }
    else{
        console.log(chalk.red("Note not found!"))
    }

    
}




module.exports = {
    addNote: addNote,
    loadNotes: loadNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};