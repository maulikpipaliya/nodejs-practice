const yargs = require('yargs');
const notes = require('./notes');
// console.log(notes.addNote());



yargs.command({
    command: 'add',
    describe : 'Add a note',
    builder: {
        title: {
            describe: "Note title",
            type: 'string',
            demandOption: true
        },
        body:{
            describe: 'BODY msg',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv){
        // console.log("TITLE : " + argv.title);
        // console.log("BODY  : " + argv.body);
        // console.log("calling addNote()");
        const notesAdded = notes.addNote(argv.title, argv.body);
        // console.log(notesAdded);
        // console.log(argv);
    }
});

yargs.command({
    command: 'remove',
    describe : 'Remove a note',
    builder:{
        title: {
            describe : 'Remove a note by title name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log(argv);
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe : 'List notes',
    handler(){
        console.log("cmd-list called");
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe : 'Read a note',
    builder:{
        title: {
            describe : 'Read a title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

//console.log(yargs.argv);
yargs.parse()
