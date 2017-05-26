const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=%2029%20Bonsai%20Lane%20Brampton',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
    //how to pretty print an object using JSON stringify

});