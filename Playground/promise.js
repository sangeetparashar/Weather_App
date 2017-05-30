var AsyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('One of them is NOT a number');
            }
        }, 2500);
    });
};


AsyncAdd(4, '5').then((message) => {
    console.log('Success, meaning the addition of the numbers is', message);
    return AsyncAdd(message, 9);
}).then((message) => {
        console.log('The answer should be 18. The true result is: ', message);
    }).catch((errorMessage) => {
    console.log(errorMessage);
});

//var somePromise = new Promise((resolve, reject) => {
//    //benefits of promises is that you have multiple functions to call but don't have to worry about mistakeningly calling it multiple times
//    setTimeout(() => {
//        resolve('Hey, it works!');
//        //reject('Unable to fulfill promise');
//    }, 3000);
//});

//somePromise.then((message) => {
//    console.log('Success:', message);
//}, (errorMessage) => {
//    console.log('Printing error:', errorMessage);
//});