const request = require('request');

const forecastWeatherStack = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6e22db2d592663bf43bbf92c5b694bf5&query=${latitude},${longitude}`;

    request({url,json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to for weather stack', undefined)
        } else if (response.body.error) {
            callback('error not found', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecastWeatherStack
