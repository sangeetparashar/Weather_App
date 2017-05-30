var request = require('request');
var geocodeAddress = (address) => {
   
    return new Promise((resolve, reject) => {
        var encoded_address = encodeURIComponent(address);
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('unable to connect to Google server.');
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the address.');
            }
            else if (body.status === 'OK') {
                //in order to print out the formatted address 
                resolve({
                    Address: body.results[0].formatted_address,
                    Longitude: body.results[0].geometry.location.lng,
                    Latitude: body.results[0].geometry.location.lat
                });
            }
        }); 
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});