const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Simulate registration for demonstration purposes
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Send POST request to login endpoint
    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data); // Handle login success or failure based on response
            // (e.g., display success message, redirect to another page)
            message.textContent = `Registration successful (simulated): Username: ${username}, Password: ${password}`; // Not secure for production

        })
        .catch((error) => {
            console.error(error); // Handle errors during the fetch request
        });


    // In a real application, you'd send the username and password to your Node.js backend for secure registration
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Simulate login for demonstration purposes
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send POST request to login endpoint
    fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // Handle login success or failure based on response
        // (e.g., display success message, redirect to another page)
        message.textContent = `Login successful (simulated): Username: ${username}, Password: ${password}`; // Not secure for production
    })
    .catch((error) => {
        console.error(error); // Handle errors during the fetch request
    }); 

    // In a real application, you'd send the username and password to your Node.js backend for secure login and handle the response (success or failure)
});
