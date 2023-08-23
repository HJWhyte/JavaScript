import './style.css';

const form = document.querySelector('form');       // Select the form object from the DOM

form.addEventListener('submit', async (e) => {                         // Listen to submit events -- if so asynch call back function 
    e.preventDefault();

    const data = new FormData(form);                                  // Access form data in correct structure 

    const response = await fetch('http://localhost:8080/dream', {      // await http post request to node server
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({                                           // Ensure the body is sent in JSON
        prompt: data.get('prompt'),
      }),
    });

    const { image } = await response.json();                                   // Image = response JSON

    const result = document.querySelector('#result');                         
    result.innerHTML = `<img src="${image}" width="512" />`;                  // Select result tag from Dom and change html to image url
});