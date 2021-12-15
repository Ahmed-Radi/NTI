const express = require('express')
const userRouter = require('./routers/user')
require('./db/mongoose')

const app = express()

app.use(express.json())

const port = process.env.PORT || 3000

app.use(userRouter)

// app.get('/users', (req, res) => {
//     console.log('Test')
// })

app.listen(port, () => {
    console.log('Server is running')
})