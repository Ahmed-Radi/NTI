const request = require('request');

const news = (callback) => {
    const url = `https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=0f012ce23c0241bc86c82c8894224753`;

    request({url,json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to news',undefined);
        } else if (response.body.message) {
            callback('Unable to find News',undefined);
        } else if (response.body.articles.length === 0) {
            callback('Please enter correct country',undefined);
        } else {
            callback(undefined,response.body);
        }
    });
}

module.exports = news