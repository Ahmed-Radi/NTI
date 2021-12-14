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

app.listen(port,()=>{
    console.log('Server is running')
})