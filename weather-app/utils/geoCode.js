const request = require('request');

const getGeocode = (address, callback) => {
    // console.log(address);
    const urlFwdGeocoding = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibWF1bGlrcGlwYWxpeWEiLCJhIjoiY2s1M3RudHNkMGJjYTNvcG1ka2Vhc3FvbCJ9.19Z9XqkbW161j-m9zd-Tkg"
    // console.log(urlFwdGeocoding)
    request({ url: urlFwdGeocoding, json: true }, (error, response) => {
        if (error) {
            callback("Error found", undefined);
        }
        else if (response.body.features.length == 0) {
            callback("Location couldn't be found", undefined)
        }
        else {
            // console.log(response.body);
            const data = response.body;
            const location = data.features[0].place_name;
            const lat = data.features[0].geometry.coordinates[1];
            const long = data.features[0].geometry.coordinates[0];
            // console.log("Lat" + lat)
            // console.log("Long" + long)
            const latLong = {
                query: location,
                latitude: lat,
                longitude: long
            }
            callback(undefined, latLong);
        }
    });
};

module.exports = getGeocode;