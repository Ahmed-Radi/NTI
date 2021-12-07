// Modules (add functionality in you program)
// 3
// core module 
// fs --> fileSystem
// node nameoffile.js
// const fs = require('fs')
// fs.writeFileSync('notes.txt','Helloo')

// console.log(fs.readFileSync('notes.txt').toString())

// // appendFileSync
// fs.appendFileSync('notes.txt',' omar')
// ////////////////////////////////////////////////////////////////////////////////

// // Import our own modules/files
// const x = require('./data')
// console.log(x.fName)
// console.log(x.lName)
// console.log(x.sum1(5,5))
// /////////////////////////////////////////////////////////////////////////////

// // NPM
// // npm init -y
// // install package as needed npm i validator
// // npm i --> node_module was deleted and i want to retrive it back

// const validator = require('validator')
// console.log(validator.isEmail('farah@gmail'))

/////////////////////////////////////////////////////////////////////////////////

// console.log(process.argv)

// const command = process.argv[2]
// if(command === 'add'){
//     console.log('Add item')
// }
// else if(command === 'delete'){
//     console.log('Delete item')
// }
// else{
//     console.log('Nothing')
// }
/////////////////////////////////////////////////////////////////////////////

//yargs 

const yargs = require('yargs')

// Version 1

// yargs.command({
//     command:'add',
//     describe:'Add note',
//     handler:()=>{
//         console.log('Add noteees')
//     }
// })

// // delete
// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     handler:()=>{
//         console.log('Delete noteees')
//     }
// })
// // read 
// yargs.command({
//     command:'read',
//     describe:'Read note',
//     handler:()=>{
//         console.log('Read noteees')
//     }
// })
// // list
// yargs.command({
//     command:'list',
//     describe:'List note',
//     handler:()=>{
//         console.log('List noteees')
//     }
// })

////////////////////////////////////////////////////////////////////////////////////

// Version 2
// node app.js add --title='title1' --body='body1'

// yargs.command({
//     command:'add',
//     describe:'Add note',
//     // options 
//     builder:{
//         title:{
//             describe:'This is title in add command',
//             demandOption:true,
//             type:'string'
//         },
//         body:{
//             describe:'This is body in add command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:()=>{
//         console.log('Add noteees')
//     }
// })

// // delete
// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     builder:{
//         title:{
//             describe:'This is title in delete command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:()=>{
//         console.log('Delete noteees')
//     }
// })
// // read 
// yargs.command({
//     command:'read',
//     describe:'Read note',
//     builder:{
//         title:{
//             describe:'This is title in read command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:()=>{
//         console.log('Read noteees')
//     }
// })
// // list
// yargs.command({
//     command:'list',
//     describe:'List note',
//     handler:()=>{
//         console.log('List noteees')
//     }
// })
// ////////////////////////////////////////////////////////////////////////////////

// // Match all
// yargs.command({
//     command:'*',
//     describe:'Match all',
//     handler:()=>{
//         console.log('Sorry not a command')
//     }
// })
/////////////////////////////////////////////////////////////////////////////////

// trial.js
///////////////////////////////////////////////////////////////////////////////

// version 3
const notes = require('./notes')
yargs.command({
    command:'add',
    describe:'Add note',
    // options 
    builder:{
        title:{
            describe:'This is title in add command',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'This is body in add command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        // console.log(argv.name,argv.body)
        // console.log(argv.title)
     notes.addNote(argv.title,argv.body)
    }
})

// delete
yargs.command({
    command:'delete',
    describe:'Delete note',
    builder:{
        title:{
            describe:'This is title in delete command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.deleteNote(argv.title)
    }
})
// read 
yargs.command({
    command:'read',
    describe:'Read note',
    builder:{
        title:{
            describe:'This is title in read command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
       notes.readNote(argv.title)
    }
})
// list
yargs.command({
    command:'list',
    describe:'List noteeeee',
    handler:()=>{
        notes.listN()
    }
})


// Match all
yargs.command({
    command:'*',
    describe:'Match all',
    handler:()=>{
        console.log('Sorry not a command')
    }
})

console.log(yargs.argv)
// yargs.parse()

/////////////////////////////////////////////////////////////////////////////////

// git init
// create file .gitignore --> /node_modules
// githun desktop --> add local repo 
// commit
// publish
// account on github