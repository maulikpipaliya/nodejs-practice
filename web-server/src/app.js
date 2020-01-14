const express = require('express');
const path = require('path')
const hbs = require('hbs')
const geoCode = require('./utils/geoCode')



const app = express();
const port = process.env.PORT || 3000;

console.log(__dirname);
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
console.log(publicDirPath);

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

app.use(express.static(publicDirPath)); // comes from static file.

app.get('', (request, response) => {
    response.render('index', {
        pageTitle: 'Home',
        name: 'Joyy'
    })
});

app.get('/help', (request, response) => {
    response.render('help', {
        pageTitle: 'Help',
        content: 'This is help content. This goes on ...',
        name: 'Dvs'
    })
})

app.get('/about', (request, response) => {
    response.render('about', {
        pageTitle: 'About',
        name: 'Joyy'
    })
})

app.get('/weather', (request, response) => {
    const address = request.query.address;


    if (address) {

        console.log(geoCode.getGeocode(address, (error, {location,latitude,longitude} = {}) => {
            if (error) {
                return response.send({error})
            }
            else {
                // console.log(data);

                geoCode.forecast(latitude, longitude, (error, { temperature, precipProbability, summary }) => {
                    // console.log(forecastData);
                    return response.send({
                        location,
                        latitude,
                        longitude,
                        temperature,
                        precipProbability,
                        summary
                    })
                    
                })
            }
        }));
    }
    else{
        return response.send({
            errorText: 'Address in query string must be provided'
        })
    }
    
})

app.get('/products', (request, response) => {

    if (!request.query.search) {
        return response.send({
            errorText: 'Search item not provided'
        })
    }
    console.log(request.query); //{ search: 'games', rating: '5' }
    response.send({
        name: 'Joyy'
    })
});


app.get('/help/*', (request, response) => {
    response.render('404', {
        errorText: 'Help article not found',
        name: 'Balraj'
    });
})


app.get('*', (request, response) => {
    response.render('404', {
        errorText: 'Page not found',
        name: 'Joyy'
    });
})

app.listen(port, () => {
    console.log("Server is up on " + port);
})