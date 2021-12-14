const express = require('express')
const userRouter = require('./routers/user')
require('./db/mongoose')

const app = express()

// parse automatic
app.use(express.json())

const port = process.env.PORT || 3000

app.use(userRouter)


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


app.listen(port,()=>{
    console.log('Server is running')
})