/************************************************ version 1 *************************************************************/

// version 1

// const request = require('request');

// weather stack
// const url = 'http://api.weatherstack.com/current?access_key=6e22db2d592663bf43bbf92c5b694bf5&query=30.050,31.250'

// request({url, json:true}, (error, response) => {
//     console.log(response.body)
//     if (error) {
//         console.log('An error in your connection')
//     } else if (response.body.error) {
//         console.log(response.body.error.type)
//     } else {
//         console.log(response.body.current.temperature)
//         console.log(response.body.current.weather_descriptions[0])
//     }
// });


// Geocode

// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiYWhtZWRyYWRpIiwiYSI6ImNrd3g3bHFicDBiODkybnA4MDdxbXpvbmIifQ.zpjPen_MwYHelK2-MVnvKw'

// request({url,json:true}, (error, response) => {
//     if (error) {
//         console.log('An error in your connection')
//     } else if(response.body.error){
//         console.log(response.body.error)
//     } else if (response.body.features.length === 0) {
//         console.log('Sorry not found', response.body.error.message)
//     } else {
//         const latitude = response.body.features[0].center[0] // 29.871903452398
//         const longitude = response.body.features[0].center[1] // 26.4941838299718
//         console.log(longitude, latitude)
//     }
// });

/************************************************ version 2 *************************************************************/

// version 2

// const request = require('request');

// const forecastWeatherStack = (latitude, longitude, callback) => {
//     const url = `http://api.weatherstack.com/current?access_key=6e22db2d592663bf43bbf92c5b694bf5&query=${latitude},${longitude}`;

//     request({url,json:true}, (error, response) => {
//         if (error) {
//             callback('Unable to connect to for weather stack', undefined)
//         } else if (response.body.error) {
//             callback('error not found', undefined)
//         } else {
//             callback(undefined, response.body.current.weather_descriptions[0])
//         }
//     })
// }

// forecastWeatherStack(29.871903452398,26.4941838299718, (error,data)=> {
//     console.log('Error ', error)
//     console.log('Data ', data)
// })


// Geocode

// const forecastGeoCode = (country, callback) => {
//     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=pk.eyJ1IjoiYWhtZWRyYWRpIiwiYSI6ImNrd3g3bHFicDBiODkybnA4MDdxbXpvbmIifQ.zpjPen_MwYHelK2-MVnvKw`

//     request({url,json:true}, (error, response) => {
//         if (error) {
//             callback('An error in your connection', undefined)
//         } else if(response.body.message){
//             callback(response.body.message, undefined)
//         } else if (response.body.features.length === 0) {
//             callback('Sorry not found', undefined)
//         } else {
//             callback(undefined, {
//                 latitude:response.body.features[0].center[0],
//                 longitude:response.body.features[0].center[1]
//             })
//         }
//     });
// }

// forecastGeoCode ('egypt',(error,data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

/************************************************ version 3 *************************************************************/

// version 3

const forecastWeatherStack = require('./tools/forecast')
const forecastGeoCode = require('./tools/geocode')

// forecastGeoCode (country, (error,data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

// forecastWeatherStack( data.latitude, data.longitude, (error,data)=> {
//     console.log('Error ', error)
//     console.log('Data ', data)
// })

const country = process.argv[2]
forecastGeoCode (country, (error,data) => {
    console.log('Error', error)
    console.log('Data', data)
    if (data) {
        forecastWeatherStack( data.latitude, data.longitude, (error,data)=> {
            console.log('Error ', error)
            console.log('Data ', data)
        })
    }
})