const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/users', (req, res) => {
    console.log('Test')
})

app.listen(port, () => {
    console.log('Server is running')
})