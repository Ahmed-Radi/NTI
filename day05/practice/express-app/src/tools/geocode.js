const request = require('request');

const forecastGeoCode = (country, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=pk.eyJ1IjoiYWhtZWRyYWRpIiwiYSI6ImNrd3g3bHFicDBiODkybnA4MDdxbXpvbmIifQ.zpjPen_MwYHelK2-MVnvKw`

    request({url,json:true}, (error, response) => {
        if (error) {
            callback('An error in your connection', undefined)
        } else if(response.body.message){
            callback(response.body.message, undefined)
        } else if (response.body.features.length === 0) {
            callback('Sorry country not found', undefined)
        } else {
            callback(undefined, {
                latitude:response.body.features[0].center[0],
                longitude:response.body.features[0].center[1]
            })
        }
    });
}

module.exports = forecastGeoCode