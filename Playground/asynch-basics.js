console.log('Starting app');

//helps illustrate the basics on non-blocking programming
//this is a async-callback - meaning that node can do other things while the 2 seconds are taking place
//we don't usually use setTimeout() in our real time apps but the principles are the same
setTimeout(() => {
    console.log("inside of call back");
}, 2000);
setTimeout(() => {
    console.log("This is the second call back");
},0000);

console.log('Finishing up');