const express = require('express');
const path = require('path')

const app = express();
const port = 3000;

console.log(__dirname);
const publicDirPath = path.join(__dirname,'../public')
console.log(publicDirPath);

app.use(express.static(publicDirPath)); // comes from static file.

// app.get('',(request, response)=>{
//     console.log(request);
//     response.send('Hello Joyy! It\'s cool');
// });

// app.get('/help', (request, response) => {
//     response.send('<h1>Help page</h1>')
// })

app.get('/about', (request, response) => {
    response.send('<h3> About page </h3> ')
})

app.get('/weather', (request, response) => {
    response.send({
        location: "Surat, India",
        latitute: 21.17,
        longitude: 72.83
    })


})


app.listen(port, () => {
    console.log("Server is up on " + port );
})