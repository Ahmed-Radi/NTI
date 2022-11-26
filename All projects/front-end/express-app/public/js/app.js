const form = document.getElementById('my-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addressAPI();
    form.reset();
})

const addressAPI = async () => { // return promise
    try {
        const address = document.getElementById('address').value;
        const res = await fetch(`http://localhost:3000/weather?address=${address}`);
        const data = await res.json();
        if (data.error) {
            document.getElementById('error').textContent = data.error;
            document.getElementById('location').textContent = '';
            document.getElementById('forecast').textContent = '';
        } else {
            document.getElementById('error').textContent = '';
            document.getElementById('location').textContent = data.location;
            document.getElementById('forecast').textContent = data.forecast;
        }
    } catch (e) {
        console.log(e);
    }
}