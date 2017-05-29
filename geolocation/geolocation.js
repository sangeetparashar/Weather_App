const request = require('request');
var geocodeAddress = (address, callback) => {
    var encoded_address = encodeURIComponent(address);
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}`,
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

        /**there are two types of errors we take a look at:
                1) machine errors: errors regarding not being able to connect to the internet and what not - errors that usually show up in the error object
                2) errors coming from the other server: from the google server (ex like bad address)
                    - to view what happens, just pull up the address from the google address
                    - we use the status to determine if things went well or not
        **/
        if (error) {
            callback('unable to connect to Google server.');
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the address.');
        }
        else if (body.status === 'OK') {
            //in order to print out the formatted address 
            callback(undefined, {
                Address: body.results[0].formatted_address,
                Longitude: body.results[0].geometry.location.lng,
                Latitude: body.results[0].geometry.location.lat
            });
        }
    });
}
module.exports = {
    geocodeAddress
}