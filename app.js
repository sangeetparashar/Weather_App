const yargs = require('yargs');
const geocode = require('./geolocation/geolocation');
const weather = require('./weather/weather.js')
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


geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    }
    else {
        console.log(results.Address);
        weather.getWeather(results.Latitude, results.Longitude, (errorMessage, weather_results) => {
            if (errorMessage) {
                console.log(errorMessage);
            }
            else {
                console.log(`Its currently ${weather_results.temperature}. However it feels like ${weather_results.apparentTemperature}.`);
            }

        });
    }
});



