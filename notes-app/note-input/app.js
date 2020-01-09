const yargs = require('yargs');
const notes = require('../app');
console.log(notes);
// console.log(process);
// console.log(process.argv); //prints args

//Create add command

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
    handler: function(argv){
        console.log("TITLE : " + argv.title);
        console.log("BODY  : " + argv.body);
        // console.log(argv);
    }
});

yargs.command({
    command: 'remove',
    describe : 'Remove a note',
    handler: function(){
        console.log("cmd-remove called");
    }
});


yargs.command({
    command: 'list',
    describe : 'List notes',
    handler: function(){
        console.log("cmd-list called");
    }
});

yargs.command({
    command: 'read',
    describe : 'Read a note',
    handler: function(){
        console.log("cmd-read called");
    }
});



//console.log(yargs.argv);
yargs.parse()