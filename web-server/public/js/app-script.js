console.log("Javascript from the file has been loaded.");




const searchBox = document.querySelector('input');

const weatherForm = document.querySelector('form');
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = searchBox.value;
    console.log(input);


    
    fetch('http://localhost:3000/weather?address=' + input).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                console.log(data);
            }
        })
    })
    // return false;
})