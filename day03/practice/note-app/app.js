const fs = require('fs')

fs.writeFileSync('note.txt','Hiiiiii')
console.log(fs.readFileSync('note.txt').toString())

fs.appendFileSync('note.txt',' Ahmed')
console.log(fs.readFileSync('note.txt').toString()) // Hiiiiii Ahmed

///////////////////////////////////////////////////////

const dataFile = require('./data')
console.log(dataFile.firstName + dataFile.lastName)

console.log(dataFile.sum(1,1)) // 2
////////////////////////////////////////////////////////

const validator = require('validator')
console.log(validator.isEmail('ahmed@gmail.com'))
console.log(validator.isEmail('ahmed'))

// const chalk = require('chalk')
// console.log(chalk.blue('Hello world!'));

////////////////////////////////////////////////////

const yargs = require('yargs')

// V1

// yargs.command({
//     command: 'add',
//     describe: 'Add Note',
//     handler: ()=> {
//         console.log('Add Note')
//     }
// })
// yargs.command({
//     command: 'delete',
//     describe: 'Delete Note',
//     handler: ()=> {
//         console.log('Delete Note')
//     }
// })
// yargs.command ({
//     command: 'read',
//     describe: 'Read Note',
//     handler: ()=> {
//         console.log('Read Note')
//     }
// })
// yargs.command ({
//     command: 'list',
//     describe: 'List Note',
//     handler: ()=> {
//         console.log('List Note')
//     }
// })

/////////////////////////////////////////////

// V2

// yargs.command({
//     command: 'add',
//     describe: 'Add Note',
//     builder: {
//         title: {
//             describe: 'this is Title in add command',
//             demandOption: true,
//             type: 'string',
//         },
//         body: {
//             describe: 'This is body in add command',
//             demandOption: true,
//             type: 'string',
//         }
//     },
//     handler: ()=> {
//         console.log('Add Note')
//     }
// })
// yargs.command({
//     command: 'delete',
//     describe: 'Delete Note',
//     builder: {
//         title: {
//             describe: 'this is Title in delete command',
//             demandOption: true,
//             type:'string',
//         }
//     },
//     handler: ()=> {
//         console.log('Delete Note')
//     }
// })
// yargs.command ({
//     command: 'read',
//     describe: 'Read Note',
//     builder: {
//         title: {
//             describe: 'this is Title in read command',
//             demandOption: true,
//             type:'string',
//         }
//     },
//     handler: ()=> {
//         console.log('Read Note')
//     }
// })
// yargs.command ({
//     command: 'list',
//     describe: 'List Note',
//     handler: ()=> {
//         console.log('List Note')
//     }
// })

// // Match all
// yargs.command ({
//     command: '*',
//     describe: 'Match not define command',
//     handler: () => {
//         console.log('Sorry not command')
//     }
// })

// yargs.parse()

///////////////////////////////////////////////////////////

// trail.js

/////////////////////////////////////////////

// V3

// const notes = require('./notes')

// yargs.command({
//     command: 'add',
//     describe: 'Add Note',
//     builder: {
//         title: {
//             describe: 'this is Title in add command',
//             demandOption: true,
//             type: 'string',
//         },
//         body: {
//             describe: 'This is body in add command',
//             demandOption: true,
//             type: 'string',
//         }
//     },
//     handler: (argv)=> {
//         notes.createNotes(argv.title,argv.body)
//     }
// })
// yargs.command({
//     command: 'delete',
//     describe: 'Delete Note',
//     builder: {
//         title: {
//             describe: 'this is Title in delete command',
//             demandOption: true,
//             type:'string',
//         }
//     },
//     handler: ()=> {
//         console.log('Delete Note')
//     }
// })
// yargs.command ({
//     command: 'read',
//     describe: 'Read Note',
//     builder: {
//         title: {
//             describe: 'this is Title in read command',
//             demandOption: true,
//             type:'string',
//         }
//     },
//     handler: ()=> {
//         console.log('Read Note')
//     }
// })
// yargs.command ({
//     command: 'list',
//     describe: 'List Note',
//     handler: ()=> {
//         console.log('List Note')
//     }
// })

// // Match all
// yargs.command ({
//     command: '*',
//     describe: 'Match not define command',
//     handler: () => {
//         console.log('Sorry not command')
//     }
// })

///////////////////////////////////////////////////////////


// V4

const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'Add Note',
    builder: {
        title: {
            describe: 'this is Title in add command',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'This is body in add command',
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv)=> {
        notes.createNotes(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Delete Note',
    builder: {
        title: {
            describe: 'this is Title in delete command',
            demandOption: true,
            type:'string',
        }
    },
    handler: (argv)=> {
        notes.deleteNote(argv.title)
    }
})
yargs.command ({
    command: 'read',
    describe: 'Read Note',
    builder: {
        title: {
            describe: 'this is Title in read command',
            demandOption: true,
            type:'string',
        }
    },
    handler: (argv)=> {
        notes.readNote(argv.title)
    }
})
yargs.command ({
    command: 'list',
    describe: 'List Note',
    handler: () => {
        notes.listNote()
    }
})

// Match all
yargs.command ({
    command: '*',
    describe: 'Match not define command',
    handler: () => {
        console.log('Sorry not command')
    }
})

yargs.parse()
