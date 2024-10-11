// const userImage = document.querySelector("#userImage")
// userImage.addEventListener('click', ()=>{
//     document.querySelector("#userMenu").style.display='block'
// })




const openMenu = document.getElementById('openMenu');
const mobileMenu = document.getElementById('mobile-menu');

openMenu.addEventListener('click', () => {
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});

let login = document.getElementById('loginButton');
let modal = document.getElementById('loginModal');
let closeModal = document.getElementById('closeModal');

login.addEventListener('click', () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `users.json?t=${new Date().getTime()}`);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let user = response.users.find(user => user.userEmail === email && user.userPassword === password);
            
            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                modal.classList.remove('hidden'); // Show the modal
            } else {
                alert('Invalid email or password.');
            }
        } else {
            console.error('Error fetching users:', xhr.statusText);
        }
    };
    xhr.onerror = () => {
        console.error('Request failed');
    };
    xhr.send();
});

// Close the modal
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden'); // Hide the modal
});



// Optional: Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!openMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.style.display = 'none';
    }
});



