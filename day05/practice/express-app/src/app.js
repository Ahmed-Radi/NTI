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

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/weather', (req, res) => {
//     res.send({
//         country: 'cairo',
//         temp: 20,
//         forecast: 'sunny',
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h2>About page</h2>')
// })

/**************************** Day 04 version 1 ***********************************/

const path = require('path');
const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

app.set('view engine', 'hbs');

const viewPath = path.join(__dirname, '../templates/views')
app.set('views', viewPath);

var hbs = require('hbs');
const PartialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(PartialsPath);

app.get('/', (req, res) => {
    res.render('index',{
        title: 'Home',
        name: 'Ahmed Radi',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Ahmed Radi',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Ahmed Radi',
        message: 'Good Day',
    })
})

/**************************** Day 04 version 2 ***********************************/

// http://localhost:3000/weather?address=egypt

// app.get('/weather', (req, res) => {
//     if (req.query.address) {
//         return res.send({
//             forecast: 'good',
//             address: req.query.address,
//             weather: 'sunny'
//         })
//     }
//     res.send({
//         error:'please provide address',
//     });

//     console.log(req.query)
// })

/**************************** Day 04 version 2 ***********************************/

const geoCode = require('./tools/geocode')
const foreCast = require('./tools/forecast')

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'please provide address',
        });
    }
    geoCode(req.query.address,(error, data) => {
        if (error) {
            return res.send({error})
        }
        foreCast(data.latitude, data.longitude, (error, data) => {
            if (error) {
                return res.send({error})
            }
            res.send({
                forecast: data,
                location: req.query.address,
            });
        })
    })
})


app.get('*', (req, res) => {
    res.render('not_found',{
        title: 'Page not found',
        name: 'Ahmed Radi',
        error: '4o4 Not found',
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})