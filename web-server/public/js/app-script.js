console.log("Javascript from the file has been loaded.");




const searchBox = document.querySelector('input');
const weatherForm = document.querySelector('form');
const msg1 = document.querySelector('#search-results');
const msg2 = document.querySelector('#search-results-error');

msg1.textContent = '';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = searchBox.value;
    console.log(input);


    msg1.textContent = 'Loading message';
    msg2.textContent = '';

    fetch('/weather?address=' + input  ).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                msg1.textContent = data.error;
                msg2.textContent = '';
                
            }
            else {
                console.log(data);
                msg1.textContent = 'For location: ' + data.location + ', temperature is ' + data.temperature + '. ';
                msg2.textContent += data.summary;
            }
        })
    })
    // return false;
})

