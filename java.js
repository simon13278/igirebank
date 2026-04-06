const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Advanced feature: Form validation
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll('input[required]');
        let valid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = '2px solid red';
                valid = false;
            } else {
                input.style.border = 'none';
            }
        });
        if (valid) {
            alert('Form submitted successfully!');
            // Here you can add actual form submission logic
        }
    });
});

// Advanced feature: Password visibility toggle (for login form)
const passwordInput = document.querySelector('.login .input-box input[type="password"]');
const passwordIcon = document.querySelector('.login .input-box i');

passwordIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.className = 'bx bx-show'; // Change icon to show
    } else {
        passwordInput.type = 'password';
        passwordIcon.className = 'bx bxs-lock-alt'; // Change back
    }
});