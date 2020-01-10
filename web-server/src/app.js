const express = require('express');

const app = express();
const port = 3000;

app.get('',(request, response)=>{
    console.log(request);
    response.send('Hello Joyy! It\'s cool');
});

app.get('/help', (request, response) => {
    response.send('Help page')
})

app.get('/about', (request, response) => {
    response.send('About page')
})

app.get('/weather', (request, response) => {
    response.send('Weather page')
})


app.listen(port, () => {
    console.log("Server is up on " + port );
})