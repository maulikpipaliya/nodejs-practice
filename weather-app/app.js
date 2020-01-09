//Goal = Address -> Temperature
//Impl = Address -> Geocode -> Temperature  
const request = require('request');
const geoCode = require('./utils/geoCode');



if (!process.argv[2]) {
    console.log('Please provide a single argument which should be location')
}
else {
    const input = process.argv[2];
    
    // Function: (input = Address) -> Geocode ->  Temperature
    geoCode.getGeocode(input, (error, latLong) => {

        console.log(latLong);
        if (error) {
            console.log(error);
        }
        else {
            geoCode.forecast(latLong.latitude, latLong.longitude, (error, data) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('\n Geocode to temp = \n', data, '\n')
                }
                console.log(latLong.location)
            })
        }
    });
}