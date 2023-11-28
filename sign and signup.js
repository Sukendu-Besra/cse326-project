document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your sign-up logic here
    alert('Sign Up button clicked!');
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your sign-in logic here
    alert('Sign In button clicked!');
});

/*const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});*/
