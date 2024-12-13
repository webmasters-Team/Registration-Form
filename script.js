document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var department = document.getElementById('department').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contactNumber').value;

    if (!firstName || !lastName || !department || !username || !password || !confirmPassword || !email || !contactNumber ) {
        alert('Please fill all the fields.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    alert('Registration successful!');

    document.getElementById('registrationForm').reset();

});