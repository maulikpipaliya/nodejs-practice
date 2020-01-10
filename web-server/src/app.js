const express = require('express');
const path = require('path')
const hbs = require('hbs')

const app = express();
const port = 3000;

console.log(__dirname);
const publicDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
console.log(publicDirPath);

app.set('view engine', 'hbs');
app.set('views',viewsPath);

hbs.registerPartials(partialsPath);

app.use(express.static(publicDirPath)); // comes from static file.

 app.get('',(request, response)=>{
    response.render('index', {
        pageTitle: 'Home',
        name: 'Joyy'
    })
});

app.get('/help', (request, response) => {
    response.render('help',{
        pageTitle: 'Help',
        content: 'This is help content. This goes on ...',
        name: 'Dvs'
    })
})

app.get('/about', (request, response) => {
    response.render('about',{
        pageTitle: 'About',
        name : 'Balraj'
    })
})

app.get('/weather', (request, response) => {
    response.send({
        location: "Surat, India",
        latitute: 21.17,
        longitude: 72.83
    })


})


app.get('/help/*', (request, response) => {
    response.render('404',{
        errorText: 'Help article not found',
        name: 'Joyy'
    });
})


app.get('*', (request, response) => {
    response.render('404',{
        errorText: 'Page not found',
        name: 'Joyy'
    });
})

app.listen(port, () => {
    console.log("Server is up on " + port );
})