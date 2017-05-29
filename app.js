const yargs = require('yargs');
const geocode = require('./geolocation/geolocation');
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


geocode.geocodeAddress(argv.a);


