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
let alllistext = document.querySelector('.left_items .intro nav ul li')
darkMode.addEventListener('click', ()=>{
    document.body.style.background = '#333';
    document.body.style.color = '#fff'
    alllistext.style.color='#fff'
    document.getElementsByTagName('p').color='fff'
    darkMode.style.display='none'
    lightMode.style.display = 'block'


})

lightMode.addEventListener('click', ()=>{
document.body.style.background = '#fff'
document.body.style.color = '#000'
lightMode.style.display='none'
alllistext.style.color="#000"
darkMode.style.display = 'block'
})


// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'getStartedDocs/index.json', false)
// xhr.send()
// let response = JSON.parse(xhr.response)
// console.log(response)
// response.getStartedPage.forEach(element => {
//     console.log(element.page)
// });

// Fetch JSON data and initialize the app
document.addEventListener('DOMContentLoaded', function () {
    fetch('getStartedDocs/index.json')
        .then(response => response.json())
        .then(data => initializePage(data.getStartedPage))
        .catch(error => console.log('Error loading JSON:', error));
});

function initializePage(pages) {
    //getting srtarted
    addClickListener('getting-started', pages, 'Getting Started');
    addClickListener('implementation-plans', pages, 'Implementation Plans');

    //web development

    addClickListener('web-application', pages, 'Web Development');
    addClickListener('frontend-dev', pages, 'Frontend Web Application Development');
    addClickListener('backend-dev', pages, 'Backend Web Application Development');
    addClickListener('database-management', pages, 'Database Management');
    addClickListener('e-commerce', pages, 'E-Commerce Web App Development');
    addClickListener('financial-web-app', pages, 'Financial Web App Developmemnt');
    addClickListener('custom-requests', pages, 'Web Applications on Custom Requests');

    //advertisement

    addClickListener('advertisement', pages, 'Advertisement');
    addClickListener('social-media-marketing', pages, 'Social Media Marketing');
    addClickListener('banner-and-posters', pages, 'Banner and Posters');
    addClickListener('visiting-cards', pages, 'Visiting Cards');
    addClickListener('flyers', pages, 'Flyers');
    addClickListener('flex-and-hoardings', pages, 'Flex and Hoardings');
    addClickListener('promotional-videos', pages, 'Promotional Videos');

    //SEO

    addClickListener('seo', pages, 'Search Engine Optimization');

    //Graphic Designing

    addClickListener('graphic-designing', pages, 'Graphic Designing');
    addClickListener('social-media-ad-designing', pages, 'Social Media Advertisement Designing');
    addClickListener('banner-designing', pages, 'Banner Designing');
    addClickListener('flyer-designing', pages, 'Flyer Designing');
    addClickListener('logo-designing', pages, 'Logo Designing');
    addClickListener('digital-media', pages, 'Digital Media');
    addClickListener('visiting-card-designing', pages, 'Visiting Card Designing');

    //Financial Services

    addClickListener('financial-services', pages, 'Financial Services');
    addClickListener('invoicing', pages, 'Invoicing');
    addClickListener('customer-management', pages, 'Customer Management');
    addClickListener('digital-payment-solution', pages, 'Digital Payment Solution');
    addClickListener('financial-services-application', pages, 'Financial Services Application');
    addClickListener('data-verification-and-validation', pages, 'Data Verification and Validation');
    addClickListener('more-services-on-custom-demands', pages, 'More Services on Custom Demands');


}

function addClickListener(id, pages, pageTitle) {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', () => updatePage(pages, pageTitle));
    } else {
        console.log(`Element with id ${id} not found`);
    }
}

function updatePage(pages, pageTitle) {
    const page = pages.find(p => p.page === pageTitle);
    if (page) {
        document.getElementById('page-title').textContent = page.page;
        // document.getElementById('page-content').textContent = page.pageContent;
        let xhr = new XMLHttpRequest()
        xhr.open('GET', page.pageContent, false)
        xhr.send()
        document.getElementById('page-content').innerHTML = xhr.response
    } else {
        console.log('Page not found:', pageTitle);
    }
}
