const request = require('request')
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


request({url,json:true},(error,response)=>{
    // low level error
    if(error){
        console.log('Error has occurred')
    }
    else if(response.body.error){
        console.log(response.body.error.type)
    }
    else{
        console.log(response.body.current.weather_descriptions[0],response.body.current.temperature)
    }

    
       
    
})