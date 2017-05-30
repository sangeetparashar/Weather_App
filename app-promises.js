const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch the weather for',
            string: true //tells yargs to always pass the address/a as a string rather than anything else
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
//console.log(argv);

var encoded_address = encodeURIComponent(argv.a);
var geoCodeURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}`;

//what axios returns is actually a promise
axios.get(geoCodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find the address.');
    };
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;

    var weather = `https://api.darksky.net/forecast/c0516209ca9ad9fee9afe5d6450f39a6/${latitude},${longitude}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weather);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`its currently ${temperature}. It feels like ${apparentTemperature}.`);

}).catch((errorMessage) => {
    if (errorMessage.code === 'ENOTFOUND') {
        console.log('Unable to connect to API server.');
    }
    else {
        console.log(errorMessage.message);
    }
    });




