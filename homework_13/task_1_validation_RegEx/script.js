document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('messageForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        const errors = [];

        if (!name.trim()) {
            errors.push("Name is required");
        }

        if (message.length < 5) {
            errors.push("Message must be at least 5 characters long");
        }

        if (!phone.match(/^\+380\d{9}$/)) {
            errors.push("Phone number must start with +380 and have 12 digits total");
        }

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            errors.push("Email must be valid");
        }

        if (errors.length > 0) {
            const errorString = errors.join("\n");
            alert(errorString);
            return false;
        }

        console.log("Name: " + name);
        console.log("Message: " + message);
        console.log("Phone number: " + phone);
        console.log("Email: " + email);

        return true;
    });
});