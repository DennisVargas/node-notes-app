/*jshint esversion: 6*/
const fs = require('fs');

const notesDataPath = 'notes-data.json';

const printNote = (note) => {
    console.log("--");
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
};

const getNotes = () =>{
    return "Your notes";
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

const saveNotes = (notes) => {
    try{
        var notesString = JSON.stringify(notes);
        fs.writeFileSync(notesDataPath, notesString);
        return true;
    } catch(e){
        return false;
    }
};

const addNote = (title, body) => {
    var note = {
        title, 
        body
    };
    var notes = loadNotes();
    var dupTitleNotes = notes.filter((note)=>note.title === title);
    if (dupTitleNotes.length > 0){
        console.log("Error! Note Title Exists. Nothing Altered.");
        return;
    }
    notes.push(note);
    if (saveNotes(notes)){
        console.log('SUCCESS! Note Added.');
        printNote(note);
    }else{
        console.log('ERROR! Write Error! Nothing Altered.');
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




module.exports = {
    getNotes,
    addNote,
    printNote,
    deleteNote
}