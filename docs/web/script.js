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
    document.body.style.color = '#fff'
    document.getElementsByTagName('p').color='fff'
    darkMode.style.display='none'
    lightMode.style.display = 'block'


})

lightMode.addEventListener('click', ()=>{
document.body.style.background = '#fff'
document.body.style.color = '#000'
lightMode.style.display='none'
darkMode.style.display = 'block'
})

