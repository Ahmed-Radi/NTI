// CRUD Operations
// create
// read
// update
// delete
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// www.facebook.com/profile
// www.facebook.com/about
//www.facebook.com/
// npm i nodemon -g

// app.get('/', (req, res) => {
//   res.send('Test')
// })

// app.get('/weather',(req,res)=>{
//     res.send('Weather page')
// })

// app.get('/about',(req,res)=>{
//     res.send('About page')
// })

app.get('/', (req, res) => {
    res.send('<p>Paragraph</p> <h1>Headerrr</h1>')
  })

app.get('/help',(req,res)=>{
    res.send({
        name:'Hassan',
        age:27
    })
})

app.get('/about',(req,res)=>{
    res.send('<h3>About page</h3>')
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'Cold',
        location:'Egypt'
    })
})

// forecast
// location
  

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})