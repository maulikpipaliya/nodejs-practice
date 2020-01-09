//Goal = Address -> Temperature
//Impl = Address -> Geocode -> Temperature  
const request = require('request');
const geoCode = require('./utils/geoCode');


const searchStr = "Delhi, India"
geoCode.getGeocode(searchStr, (error, latLong) => {
    console.log(latLong);
    if (error) {
        console.log(error);
        
    }
    else {
        const url = 'https://api.darksky.net/forecast/1e61e491e4f83e3ce5b0389d67ee1293/' + latLong.latitude + ',' + latLong.longitude + '';
        // console.log(url);
        request({ url: url, json: true }, (error, response) => {
            // console.log(response.body.currently);
            if (error) {
                console.log("ERR-002: Some error occured meanwhile")
            } else if (response.body.error) {
                console.log("ERR-004: response.body.error is undefined")
            }
            else {
                const data = response.body;
                const currentData = response.body.currently;
                console.log("Temperature   :" + currentData.temperature);
                console.log("Chance of rain:" + currentData.precipProbability);
                console.log(data.daily.summary);
            }

        })

    }

});



