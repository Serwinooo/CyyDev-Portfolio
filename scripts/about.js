const aboutPage = document.querySelector('#about-page');
const homePage = document.querySelector('#home-page');
const contactPage = document.querySelector('#contact-page');
const contentTitle = document.querySelector('#content-title');
const contentAbout = document.querySelector('#content-about');
const contentHome = document.querySelector('#content-home');
const contact = document.querySelector('#content-contact');

function aboutme(){
    contentTitle.innerHTML = 'About Me';
    contentAbout.style.display = 'block';
    contentHome.style.display = 'none';
    contact.style.display = 'none';
}

aboutPage.addEventListener('click', aboutme);

function homepage(){
    contentTitle.innerHTML = 'Welcome to CyyDev Portfolio!';
    contentHome.style.display = 'block';
    contentAbout.style.display = 'none';
    contact.style.display = 'none';
    
}

homePage.addEventListener('click', homepage);

function contactpage(){
    contentTitle.innerHTML = 'Contact Me';
    contact.style.display = 'block';
    contentHome.style.display = 'none';
    contentAbout.style.display = 'none';
    
}

contactPage.addEventListener('click', contactpage);