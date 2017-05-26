const request = require('request');

request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=%2029%20Bonsai%20Lane%20Brampton',
    json: true
}, (error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    //how to pretty print an object using JSON stringify
    //console.log(JSON.stringify(response, undefined, 2));
    //this is to check what the response actually is
    //since body is the part of the response, they decided to make that the 3rd arugment
    //it also has something called header and those are key value pairs
    //the values are strings that give us useful information but we rarely use it
    //the headers are something that come from the server
    //the request has all the good stuff like the host and pathman and all
    //beneheath that we have our own headers - info send by node to google APIs like json objects being true

    //the error parameter is to check if the error exists in node not being able to make the HTTP request
    //it can also be f we dont have connection to the internet and such
    //console.log(JSON.stringify(error, undefined, 2));
    
    //in order to print out the formatted address -->
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Longitutde: ${body.results[0].geometry.location.lng}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);

});