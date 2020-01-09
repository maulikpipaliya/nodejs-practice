const array = ["A","B","C","D"]


// array = JSON.parse(array);
console.log(array);
console.log("-")
var index = array.indexOf('C');


if(index > -1 ){
    const splicedArray = array.splice(index,1);
    
    console.log(splicedArray);
    console.log("@" + index);
}

console.log(array);

