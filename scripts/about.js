const aboutPage = document.querySelector('#about-page');
const homePage = document.querySelector('#home-page');
const contactPage = document.querySelector('#contact-page');
const certificatesPage = document.querySelector('#certificates-page');
const projectsPage = document.querySelector('#projects-page');
const contentTitle = document.querySelector('#content-title');
const contentAbout = document.querySelector('#content-about');
const contentHome = document.querySelector('#content-home');
const contact = document.querySelector('#content-contact');
const contentCertificates = document.querySelector('#content-certificates');
const contentProjects = document.querySelector('#content-projects');
const divProfile = document.querySelector('#content-profile');
const contentPages = document.querySelector('#content-pages');

function aboutme(){
    contentTitle.innerHTML = 'About Me';
    contentAbout.style.display = 'block';
    divProfile.style.display = 'block';
    contentPages.style.width = '';
    contentHome.style.display = 'none';
    contact.style.display = 'none';
    contentCertificates.style.display = 'none';
    contentProjects.style.display = 'none';
}

aboutPage.addEventListener('click', aboutme);

function homepage(){
    contentTitle.innerHTML = 'Welcome to CyyDev Portfolio!';
    contentHome.style.display = 'block';
    divProfile.style.display = 'block';
    contentPages.style.width = '';
    contentAbout.style.display = 'none';
    contact.style.display = 'none';
    contentCertificates.style.display = 'none';
    contentProjects.style.display = 'none';
}

homePage.addEventListener('click', homepage);

function contactpage(){
    contentTitle.innerHTML = 'Contact Me';
    contact.style.display = 'block';
    divProfile.style.display = 'block';
    contentPages.style.width = '';
    contentHome.style.display = 'none';
    contentAbout.style.display = 'none';
    contentCertificates.style.display = 'none';
    contentProjects.style.display = 'none';
}

contactPage.addEventListener('click', contactpage);

function certificatespage(){
    contentTitle.innerHTML = 'My Trainings & Webinars';
    contentCertificates.style.display = 'block';
    divProfile.style.display = 'block';
    contentPages.style.width = '';
    contact.style.display = 'none';
    contentHome.style.display = 'none';
    contentAbout.style.display = 'none';
    contentProjects.style.display = 'none';
}

certificatesPage.addEventListener('click', certificatespage);

function projectspage(){

    contentTitle.innerHTML = 'My Projects';
    contentProjects.style.display = 'block';
    contact.style.display = 'none';
    contentHome.style.display = 'none';
    contentAbout.style.display = 'none';
    contentCertificates.style.display = 'none';
    divProfile.style.display = 'none';
    contentPages.style.width = '1270px';
}

projectsPage.addEventListener('click', projectspage);