/*jshint esversion: 6*/

const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title.',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body.',
            demandOption:true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Title of note to be deleted.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(`Removing note with title, ${argv.title}`);
        if(notes.deleteNote(argv.title))
            console.log(chalk.green.inverse('Success! Note Removed.'));
        else
            console.log(chalk.red.inverse(`Error! Nothing Removed.`));
    }
});

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: () => {
        console.log('Listing notes.');
    }
});

yargs.command({
    command: 'read',
    describe: 'read note',
    handler: () => {
        console.log('Reading note.');
    }
});

yargs.parse();

// console.log(yargs.argv);

// challenge: add two new commmands
// 1. setup ccommand to suupport "list"
// 2. support read
// 3. test work by running both

// const msg = notes.getNotes();
// console.log(msg);
// const boldGreen = chalk.italic.yellow.bgBlack;
// console.log( boldGreen("Success!"));

// console.log(process.argv);
// const validator = require('validator');
// console.log(validator.isURL('https://mead.io'));
// const returnedNotes = notes.getNotes();
// console.log(returnedNotes);
// const util = require('./utils.js');
// const sum = util.add(4, -2);
// console.log(sum);