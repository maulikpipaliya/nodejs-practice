const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong')
        resolve('It went well');
    }, 1000);
})


doWorkPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})