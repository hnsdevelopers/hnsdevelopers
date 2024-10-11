// const userImage = document.querySelector("#userImage")
// userImage.addEventListener('click', ()=>{
//     document.querySelector("#userMenu").style.display='block'
// })


const userImage = document.getElementById('userImage');
const userMenu = document.getElementById('userMenu');

userImage.addEventListener('click', () => {
    if (userMenu.style.display === 'none' || userMenu.style.display === '') {
        userMenu.style.display = 'block';
    } else {
        userMenu.style.display = 'none';
    }
});

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!userImage.contains(event.target) && !userMenu.contains(event.target)) {
        userMenu.style.display = 'none';
    }
});


const oepnMenu = document.getElementById('oepnMenu');
const mobileMenu = document.getElementById('mobile-menu');

openMenu.addEventListener('click', () => {
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!openMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.style.display = 'none';
    }
});



