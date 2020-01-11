console.log("Javascript from the file has been loaded.");


const search = 'Mumbai India';
fetch('http://localhost:3000/weather?address=!').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error);
        }
        else{
            console.log(data);
        }
    })
})