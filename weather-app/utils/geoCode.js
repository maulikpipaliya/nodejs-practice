const request = require('request');

// Address to Geocode
const getGeocode = (address, callback) => {
    
    // console.log(address);
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibWF1bGlrcGlwYWxpeWEiLCJhIjoiY2s1M3RudHNkMGJjYTNvcG1ka2Vhc3FvbCJ9.19Z9XqkbW161j-m9zd-Tkg"
    // console.log(urlFwdGeocoding)
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Error found", undefined);
        }
        else if (body.features.length == 0) {
            callback("Location couldn't be found", undefined)
        }
        else {
            // console.log(response.body);
            const data = body;
            const location = data.features[0].place_name;
            const lat = data.features[0].geometry.coordinates[1];
            const long = data.features[0].geometry.coordinates[0];
            // console.log("Lat" + lat)
            // console.log("Long" + long)
            const latLong = {
                location: location,
                latitude: lat,
                longitude: long
            }
            callback(undefined, latLong);
        }
    });
};


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)



// Geocode to temperature
const forecast = (lat, long, callback) => {
    
    // console.log(lat, long);
    const url = 'https://api.darksky.net/forecast/1e61e491e4f83e3ce5b0389d67ee1293/' + lat + ',' + long + '';
    // console.log(url);
    request({ url, json: true }, (error, { body }) => { // const {body} = response
        // console.log(response.body.currently);
        if (error) {
            callback("Low level error", undefined);
        } else if (body.error) {
            callback("Coordinate error", undefined);
        }
        else { // Success, pass forecast string for data (same format as from before)
            const data = body;
            const currentData = body.currently;
            
            // console.log(data.daily.summary);
            callback(undefined, {
                temperature: currentData.temperature,
                precipProbability: currentData.precipProbability,
                summary: data.daily.summary
            })
        }

    })
}


const geoCode = {
    getGeocode: getGeocode,
    forecast: forecast
}
module.exports = geoCode;