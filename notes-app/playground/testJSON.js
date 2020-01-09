const fs = require('fs');


const fileData = fs.readFileSync('testJSON.json').toString();

const data = JSON.parse(fileData);
console.log(data);

data.name = "Joyy";
data.age = 22;



console.log(data);
fs.writeFileSync('changedJSON.json',JSON.stringify(data));
