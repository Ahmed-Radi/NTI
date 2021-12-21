const express = require('express')

// dotenv 
require('dotenv').config()

const multer = require('multer')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')

const app = express()

// parse automatic
app.use(express.json())

const port = process.env.PORT
 
app.use(userRouter)
app.use(taskRouter)


// app.get('/',(req,res)=>{
// res.send('Testing')
// })

//////////////////////////////////////////////////////////////////////////////////////////

// Bcryptjs

// const bcrypt = require('bcryptjs')
// const passwordFunction = async () =>{
//     const password = 'R123456' // sign up

//     // hash --> create hashsed password
//     const hashedPassword = await bcrypt.hash(password,8) //R123456
//     console.log(hashedPassword)
//                                                     // R123456
//     const compare = await bcrypt.compare('R123456',hashedPassword)
//     console.log(compare)

// }

// passwordFunction()

/////////////////////////////////////////////////////////////////////////////////////////

// json web token

const jwt = require('jsonwebtoken')
const Task = require('./models/task')
const User = require('./models/user')

// const myToken = async () =>{
//     // header payload signtaure
//     const token = jwt.sign({_id:'123'},'nodecourse')
//     console.log(token)

//     // verify
//     const tokenVerify = jwt.verify(token,'nodecourse')
//     console.log(tokenVerify)
// }
// myToken()

//////////////////////////////////////////////////////////////////////////////////

// Express middelware

// Without express middelware
// new request --> run route hanlder

// With express middelware
// new request --> do sth (check token valid) --> run route handler

///////////////////////////////////////////////////////////////////////////////////////

//
// const main = async () =>{
//     // const task = await Task.findById('61baf64a7d3e39578f9440e5')
//     // await task.populate('owner')  // 61baf5d37d3e39578f9440de  --> {}
//     // console.log(task.owner) 

//     const user = await User.findById('61baf5d37d3e39578f9440de')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }
// main()

//////////////////////////////////////////////////////////////////////////////

// Multer 
//  const uploads = multer({
//      dest:'images',
//      limits:{
//          // 1 MG --> 1000000 byte
//          fileSize: 1000000
//      },
//      fileFilter(req,file,cb){
//          // cv.pdf
//          if(!file.originalname.endsWith('.pdf')){
//             cb(new Error('File must be a pdf'))
//          }
//          cb(null,true)
//      }
//  })

//  app.post('/uploads',uploads.single('avatar'),(req,res)=>{
//      res.send('File uploaded successfully')
//  })

app.listen(port,()=>{
    console.log('Server is running')
})