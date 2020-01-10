const express = require('express');
const path = require('path')

const app = express();
const port = 3000;

console.log(__dirname);
const publicDirPath = path.join(__dirname,'../public')
console.log(publicDirPath);

app.set('view engine', 'hbs')
app.use(express.static(publicDirPath)); // comes from static file.

 app.get('',(request, response)=>{
    response.render('index', {
        pageTitle: 'Home',
        name: 'Maulik Pipaliya'
    })
});

app.get('/help', (request, response) => {
    response.render('help',{
        pageTitle: 'Help',
        content: 'This is help content. This goes on ...'
    })
})

app.get('/about', (request, response) => {
    response.render('about',{
        pageTitle: 'About',
        name : 'Joyy'
    })
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