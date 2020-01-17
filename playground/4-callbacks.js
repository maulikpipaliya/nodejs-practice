
// console.log("callbacks");


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add = (num1, num2) => {
    result = num1 + num2;
    return result;
}

// console.log(add(1,4));



const sum = (n1, n2, callback) => {
    setTimeout(() => {
        // const result = n1 + n2;
        const result = {
            addition : n1 + n2,
            subtraction : n2 - n1
        };
        callback(result);        
        
    }, 2000);
    // callback(n1 * n2);
}


sum(1,3,(ans)=>{
    console.log(ans);
    // console.log('subtraction : ' + s);
})


const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback('Printed after 1 second', undefined)
    }, 1000);

    callback(undefined, 'Success')

}


doWorkCallback( (error, result) => {
    console.log('function is called');
    if(error){
        return console.log(error);
    }
    else{
        return console.log(result);
    }
});