//const validator = require('validator');
const chalk = require('chalk');
//This is an npm package
const notes = require('./notes.js');
//This is a file I created
const yargs = require('yargs');

yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note info',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    desbribe: 'List the notes',
    handler: function(){
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse();
//console.log(yargs.argv);

//const printNotes = notes();

//console.log(printNotes);

//console.log(validator.isURL('https://mead.io'));
//console.log(chalk.blue('Make dat money, son!'));
//console.log(chalk.blue.bgRed.bold('WTF!'));

//console.log(process.argv[2]);
