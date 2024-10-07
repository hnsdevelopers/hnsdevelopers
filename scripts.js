// Handle form submission
let buttonSubmit = document.querySelector("#formSubmit")
document.getElementById('contactForm').addEventListener('submit', function(event) {
    buttonSubmit.innerText = "Sending Message";
    event.preventDefault();

    let formData = new FormData(this);

    // Handle form submission logic here (e.g., using EmailJS)
    emailjs.send('service_5oqrxe9', 'template_h94cnl8', {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        mobile: formData.get('mobile')
    }).then(function(response) {
        //alert('Message sent successfully!');
        buttonSubmit.innerText="Message sent Successfully"
    }, function(error) {
        //alert('Failed to send message: ' + error.text);
        buttonSubmit.innerText="Failed to send message"
    });
});

// Handle newsletter subscription
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('newsletterEmail').value;

    // Newsletter subscription logic here
    alert(`Thank you for subscribing with ${email}!`);
});
