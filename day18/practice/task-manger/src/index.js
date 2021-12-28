require('dotenv').config()
const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')

const app = express()

app.use(express.json())

const port = process.env.PORT

app.use(cors())
app.use(userRouter)
app.use(taskRouter)
// app.get('/users', (req, res) => {
//     console.log('Test')
// })

app.listen(port, () => {
    console.log('Server is running')
})