const request = require('request')

// version 1
const url = 'http://api.weatherstack.com/current?access_key=e818390445c98dfad0da1c00a33ad9f8&query=30.050,31.250'

// request({url},(error,response)=>{
//     // console.log(response)
//     console.log(response.body)
//     // console.log(response.body.location.name)

//     const data =JSON.parse(response.body)
//     console.log(data)
//     console.log(data.location.name)
// })

/////////////////////////////////////////////////////////////////////////////////

// request({url,json:true},(error,response)=>{
//     // console.log(response)
//     console.log(response.body)
//     console.log(response.body.location.name)

// })
// request({url,json:true},(error,response)=>{
//     // low level error
//     if(error){
//         console.log('Error has occurred')
//     }
//     else if(response.body.error){
//         console.log(response.body.error.type)
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0],response.body.current.temperature)
//     }

// })
/////////////////////////////////////////////////////////////////////////////////

// geocode
// https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw

// const geocodeUrl ='https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw'

// request({url:geocodeUrl,json:true},(error,response)=>{
//     if(error){
//         console.log('Error has occurred')
//     }
//     else if(response.body.message){
//         console.log(response.body.message)
//     }
//     else if(response.body.features.length === 0){
//         console.log('Sorry not found ... serach error')
//     }
   
//     else{
//         const longtitude = response.body.features[0].center[0]
//         const latitude= response.body.features[0].center[1]
//         console.log(longtitude,latitude)
       
//     }
// })

//////////////////////////////////////////////////////////////////////////////////

// version 2

// const forecast = (latitude,longtitude,callback) =>{
//     const url = 'http://api.weatherstack.com/current?access_key=e818390445c98dfad0da1c00a33ad9f8&query=' + latitude + ',' + longtitude

//     request({url,json:true},(error,response)=>{
//         if(error){
//             callback('Unable to connect wetaher service',undefined)
//         }
//         else if(response.body.error){
//             callback('Unable to find location',undefined)
//         }
//         else{
//             callback(undefined, response.body.current.weather_descriptions[0] + " It is now " + response.body.current.temperature )
//         }
//     })
// }

// // undefined, response.body.current.weather_descriptions[0] + " It is now " + response.body.current.temperature 
// forecast( 29.871903452398,26.4941838299718, (error,data)=>{
//     console.log('Error ' , error)
//     console.log('Data ' , data)
// }   )

// console.log('Testtttttttttttttttt')


////////////////////////////////////////////////////////////////////////////////////////

// const geocode = (address,callback) =>{
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw'
//     request({url,json:true},(error,response)=>{
//     if(error){
//        callback('Unable to connect to location service',undefined)
//     }
//     else if(response.body.message){
//         callback(response.body.message,undefined)
//     }
//     else if(response.body.features.length === 0){
//         callback('Unable to find location..Please try again',undefined)
//     }
   
//     else{
//         callback(undefined,{
//             latitude:response.body.features[0].center[0],
//             longtitude:response.body.features[0].center[1]
//         })
       
//     }
//     })
// }

// geocode('India',(error,data)=>{
//     console.log('Error ' ,error)
//     console.log('Data ' ,data)
// })

///////////////////////////////////////////////////////////////////////////////////////

// version 3

const forecast = require('./tools/forecast')
const geocode = require('./tools/geocode')

// forecast( 29.871903452398,26.4941838299718, (error,data)=>{
//     console.log('Error ' , error)
//     console.log('Data ' , data)
// }   )

// geocode('India',(error,data)=>{
//     console.log('Error ' ,error)
//     console.log('Data ' ,data)
// })


console.log(process.argv)
const location = process.argv[2]
geocode(location,(error,data)=>{
    console.log('Error ' ,error)
    console.log('Data ' ,data)
    if(data){
    forecast( data.latitude,data.longtitude, (error,data)=>{
        console.log('Error ' , error)
        console.log('Data ' , data)
    }   )
}

})