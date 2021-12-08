const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/**************************** version 1 ***********************************/

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/weather', (req, res) => {
//     res.send('Weather')
// })

// app.get('/help', (req, res) => {
//     res.send('Help')
// })

/**************************** version 2 ***********************************/

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/weather', (req, res) => {
    res.send({
        country: 'cairo',
        temp: 20,
        forecast: 'sunny',
    })
})

app.get('/about', (req, res) => {
    res.send('<h2>About page</h2>')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})