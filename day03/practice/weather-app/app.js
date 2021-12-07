const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=6e22db2d592663bf43bbf92c5b694bf5&query=30.050,31.250'
// request({url,json:true}, (error, response) => {
//     console.log(response.body)
//     console.log(response.body.location.name)
// });

request({url,json:true}, (error, response) => {
    console.log(response.body)
    if (error) {
        console.log('')
    } else if (response.body.error) {
        console.log(response.body.error.type)
    } else {
        console.log(response.body.current.temperature)
        console.log(response.body.current.weather_descriptions[0])
    }
});
