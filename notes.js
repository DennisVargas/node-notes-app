/*jshint esversion: 6*/
const fs = require('fs');

const notesDataPath = 'notes-data.json';

const addNote = (title, body) => {
    var note = {
        title, 
        body
    };
    var notes = loadNotes();
    // var dupTitleNotes = notes.filter((note)=>note.title === title);
    var dupNote = notes.find((note)=>note.title === title);
    if (dupNote){
        return -1;
    }
    notes.push(note);
    if (saveNotes(notes)){
        printNote(note);
        return 0;
    }else{
        return -2;
    }
};

const deleteNote = (title) => {
    console.log('delete note title: ', title);
    var notes = loadNotes();
    var filteredNotes = notes.filter((note)=>note.title !== title);
    saveNotes(filteredNotes);
    if (notes.length !== filteredNotes.length)
        return true;
    else
        return false;
};

const getNotes = () =>{
    return "Your notes";
};

const listNotes = () => {
    console.log("Listing all notes.");
    var notes = loadNotes();
    printNotes(notes);
};

const printNotes = (notes) => {
    console.log("Printing notes.");
    notes.forEach((note) => printNote(note));
};

const loadNotes = () => {
    try{
        var notesBuffer = fs.readFileSync('notes-data.json');
        var notes = JSON.parse(notesBuffer);
        return notes;
    }catch(e){
        return [];
    }
};

const printNote = (note) => {
    console.log("--");
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
};

const saveNotes = (notes) => {
    try{
        var notesString = JSON.stringify(notes);
        fs.writeFileSync(notesDataPath, notesString);
        return true;
    } catch(e){
        return false;
    }
};

module.exports = {
    addNote,
    deleteNote,
    getNotes,
    listNotes,
    printNote
};