const request = require('request');

//forecast IO API key: c0516209ca9ad9fee9afe5d6450f39a6
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//this means we need to input our api key, lat and longitude to get the weather data


var getWeather = (latitude, longitude, callback) => {

    request({
        url: `https://api.darksky.net/forecast/c0516209ca9ad9fee9afe5d6450f39a6/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io servers.');
        }
        else if (response.statusCode === 404) {
            callback('Unable to fetch weather info');
        }
        else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });

}

module.exports = {
    getWeather
}

