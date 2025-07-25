document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const agreeTerms = document.getElementById('agreeTerms');

    // Error message elements
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    function validateEmail(email) {
        // Simple email regex
        return /^\S+@\S+\.\S+$/.test(email);
    }

    function validatePassword(password) {
        // At least 8 characters, contains letters and numbers
        return password.length >= 8 && /[A-Za-z]/.test(password) && /[0-9]/.test(password);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        // First Name
        if (firstName.value.trim() === '') {
            firstNameError.style.display = 'block';
            valid = false;
        } else {
            firstNameError.style.display = 'none';
        }

        // Last Name
        if (lastName.value.trim() === '') {
            lastNameError.style.display = 'block';
            valid = false;
        } else {
            lastNameError.style.display = 'none';
        }

        // Email
        if (!validateEmail(email.value.trim())) {
            emailError.style.display = 'block';
            valid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Password
        if (!validatePassword(password.value)) {
            passwordError.style.display = 'block';
            valid = false;
        } else {
            passwordError.style.display = 'none';
        }

        // Confirm Password
        if (confirmPassword.value !== password.value || confirmPassword.value === '') {
            confirmPasswordError.style.display = 'block';
            valid = false;
        } else {
            confirmPasswordError.style.display = 'none';
        }

        // Terms
        if (!agreeTerms.checked) {
            alert('You must agree to the Terms of Service and Privacy Policy.');
            valid = false;
        }

        if (valid) {
            // Redirect to checkout.html
            window.location.href = 'checkout.html';
        }
    });
});
