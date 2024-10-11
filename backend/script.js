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

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!openMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.style.display = 'none';
    }
});



