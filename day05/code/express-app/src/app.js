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

const path = require('path')
const publicDirectory = path.join(__dirname,'../public')

app.use(express.static(publicDirectory))

// app.get('/', (req, res) => {
//     res.send('<p>Paragraph</p> <h1>Headerrr</h1>')
//   })

// app.get('/help',(req,res)=>{
//     res.send({
//         name:'Hassan',
//         age:27
//     })
// })

// app.get('/about',(req,res)=>{
//     res.send('<h3>About page</h3>')
// })

// app.get('/weather',(req,res)=>{
//     res.send({
//         forecast:'Cold',
//         location:'Egypt'
//     })
// })

// forecast
// location

/////////////////////////////////////////////////////////////////////////////////////////////
// Serve static files

// place where app.js exist
console.log(__dirname)
// full path of app.js
console.log(__filename)



// D:\nti\node\express-app\src , ../ ==> D:\nti\node\express-app\
console.log(path.join(__dirname,'../'))

// // D:\nti\node\express-app\src , ../public ==> D:\nti\node\express-app\
console.log(path.join(__dirname,'../public'))

////////////////////////////////////////////////////////////////////////////////////

// Template engine
// hbs ==> html + dynamic features

// npm i hbs

app.set('view engine', 'hbs');

// change obligatory path views 

// D:\nti\node\express-app\src 
const viewsPath = path.join(__dirname,'../templates/views')
app.set('views',viewsPath)

// registerpartials (header/footer)

// nodemon src/app.js -e js,hbs 
// -e --> stands for extenstion
const hbs = require('hbs')
const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)


// localhost:3000 --> /
app.get('/',(req,res)=>{
    res.render('index',{
        title:'Home page',
        name:'Osamaaaaaaaa'
    })
})

app.get('/about',(req,res)=>{
  res.render('aboutpage',{
    title:'About page',
    name:'Ali'
  })
})


app.get('/help',(req,res)=>{
  res.render('help',{
    title:'Help page',
    name:'Zain',
    msg:'Help me !!!!'
  })
})


///////////////////////////////////////////////////////////////////////////////////////

// localhost:3000/products?search=games&rating=5
app.get('/products',(req,res)=>{
  console.log(req.query)
  console.log(req.query.search)
  res.send({
    product:[]
  })
})

// localhost:3000/weather?address=france
// weather --> address
// forecast
// location :'egypt'

// app.get('/weather',(req,res)=>{
//   if(!req.query.address){
//    return res.send({
//       error:'You must provide address'
//     })
//   }
//   res.send({
//     forecast:'It is cold',
//     location:req.query.address
//   })
// })

/////////////////////////////////////////////////////////////////////////////////////////////

const forecast = require('./tools/forecast')
const geocode = require('./tools/geocode')

app.get('/weather',(req,res)=>{
  if(!req.query.address){
   return res.send({
      error:'You must provide address'
    })
  }
  // 'Unable to connect to location service',undefined
  geocode(req.query.address,(error,data)=>{
    if(error){
      return res.send({error})
    }
    forecast(data.latitude,data.longtitude,(error,forecastData)=>{
      if(error){
        return res.send({error})
      }
      res.send({
        forecast:forecastData,
        location:req.query.address
      })
    })
  })
})


// app.get('*',(req,res)=>{
//   res.send('404 not found')
// })



// help --> title / name / msg
// about --> title / name

app.get('*',(req,res)=>{
  res.render('404page',{
    title:'404 page',
    name:'Default'
  })
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})