function validateForm() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter both username and password.';
        return false;
    }

    // Add your authentication logic here (e.g., check against a database)

    // For demonstration purposes, assuming the username is 'user' and the password is 'pass'
    if (username === 'arvindsoren82@gmail.com' && password === 'pass') {
        errorMessage.textContent = 'login succesful'; // Clear any previous error message
        alert('Login successful!'); // You can replace this with your own logic (e.g., redirect to another page)
        return true;
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        return false;
    }
}
