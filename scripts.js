// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    // Handle form submission logic here (e.g., using EmailJS)
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    }).then(function(response) {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send message: ' + error.text);
    });
});

// Handle newsletter subscription
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('newsletterEmail').value;

    // Newsletter subscription logic here
    alert(`Thank you for subscribing with ${email}!`);
});
