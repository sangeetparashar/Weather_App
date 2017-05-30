var somePromise = new Promise((resolve, reject) => {
    //benefits of promises is that you have multiple functions to call but don't have to worry about mistakeningly calling it multiple times
    setTimeout(() => {
        resolve('Hey, it works!');
        //reject('Unable to fulfill promise');
    }, 3000);
});

somePromise.then((message) => {
    console.log('Success:', message);
}, (errorMessage) => {
    console.log('Printing error:', errorMessage);
});