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
    geoCode.getGeocode(input, (error, {latitude, longitude, location}) => {

        // console.log(latLong);
        // const {latitude, longitude, location} = latLong; // applied object destructuting

        if (error) {
            console.log(error);
        }
        else {
            geoCode.forecast(latitude, longitude, (error, data) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('\n Geocode to temp = \n', data, '\n')
                }
                console.log(location)
            })
        }
    });
}