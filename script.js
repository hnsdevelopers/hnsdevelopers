function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}

document.addEventListener('keyup', (e)=>{
    const searchServices = document.getElementById('searchServices')

    console.log(e.key)
    if(e.key==="/"){
        searchServices.focus()
    }
})

let darkMode = document.querySelector('#darkMode');
let lightMode = document.querySelector('.bx-sun')
darkMode.addEventListener('click', ()=>{
    document.body.style.background = '#333';
    document.body.style.color = '#fff';
    document.querySelectorAll('section').forEach(function(plan) {
        plan.style.background = '#fff';
    });
    darkMode.style.display='none';
    document.querySelectorAll('.plan').forEach(function(plan) {
        plan.style.background = '#333';
    });
    lightMode.style.display = 'block';


})

lightMode.addEventListener('click', ()=>{
document.body.style.background = '#fff';
document.body.style.color = '#000';
document.querySelectorAll('section').forEach(function(plan) {
    plan.style.background = '#fff';
});
lightMode.style.display='none';
document.querySelectorAll('.plan').forEach(function(plan) {
    plan.style.background = '#fff';
});
darkMode.style.display = 'block';
})


// Get references to buttons and popup elements
const privacyBtn = document.getElementById('privacyBtn');
const termsBtn = document.getElementById('termsBtn');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popupContent');
const popupTitle = document.getElementById('popupTitle');
const closePopup = document.getElementById('closePopup');

// Function to open popup with given content
function openPopup(title, file) {
    popupTitle.innerText = title; // Set popup title
    fetch(file) // Load the external HTML file
        .then(response => response.text())
        .then(data => {
            popupContent.innerHTML = data; // Inject the content into the popup
            popup.style.display = 'block'; // Show the popup
        })
        .catch(error => {
            popupContent.innerHTML = "<p>Failed to load content.</p>";
        });
}

// Event listeners for buttons
privacyBtn.addEventListener('click', () => openPopup('Privacy Policy', 'privacy-policy.html'));
termsBtn.addEventListener('click', () => openPopup('Terms & Conditions', 'terms-and-conditions.html'));

// Event listener to close popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the popup
});

// Optional: close popup if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target == popup) {
        popup.style.display = 'none'; // Hide popup if clicked outside
    }
});

