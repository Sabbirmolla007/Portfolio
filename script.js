document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Display the form data in an alert for now
    alert(`Thank you, ${name}! Your message has been sent.`);

    // You could add code to actually send the data to an email or a server.
    // For example, using a service like EmailJS or integrating with a back-end.
});
