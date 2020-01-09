// import { , fstat } from 'fs';

const fs = require('fs');

const book = {
    title: 'Rich Dad Poor Dad',
    Author: 'Robert Kiyosaki'
};

console.log(book)
console.log(JSON.stringify(book))

fs.writeFileSync('1-json.json',JSON.stringify(book));
