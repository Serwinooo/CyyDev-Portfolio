const contentHome = document.querySelector('#content-home');
const aboutContainer = document.querySelector('#content-about');
const contentTitle = document.querySelector('#content-title');
const contentContact = document.querySelector('#content-contact');
const contentCertificates = document.querySelector('#content-certificates');
const contentProjects = document.querySelector('#content-projects');
const cardsContent = document.querySelectorAll('.card');
const projectOptions = document.getElementById('project-options');
const containerProject = document.getElementById('projectContainer');

const hideAllSections = () => {
    contentHome.style.display = 'none';
    aboutContainer.style.display = 'none';
    contentContact.style.display = 'none';
    contentCertificates.style.display = 'none';
    contentProjects.style.display = 'none';
    projectOptions.style.display ='none';
    projectContainer.style.display = 'none';
};

const applyAnimation = (element) => {
    element.classList.add('animate');
    element.addEventListener('animationend', () => {
        element.classList.remove('animate');
    }, { once: true });
};

const homePage = () => {
    hideAllSections();
    contentHome.style.display = 'block';
    contentTitle.innerHTML = 'Welcome to CyyDev Portfolio!';

    for (let i = 0; cardsContent.length; i++){
        applyAnimation(cardsContent[i]);
    }
};

const aboutPage = () => {
    hideAllSections();
    aboutContainer.style.display = 'block';
    contentTitle.innerHTML = 'About Me';
    
    for (let i = 0; cardsContent.length; i++){
        applyAnimation(cardsContent[i]);
    }
};

const contactPage = () => {
    hideAllSections();
    contentContact.style.display = 'block';
    contentTitle.innerHTML = 'Contact Me';
   
    for (let i = 0; cardsContent.length; i++){
        applyAnimation(cardsContent[i]);
    }
};

const certPage = () => {
    hideAllSections();
    contentCertificates.style.display = 'block';
    contentTitle.innerHTML = 'Seminars & Training Certificates';
   
    for (let i = 0; cardsContent.length; i++){
        applyAnimation(cardsContent[i]);
    }
};

const projectPage = () => {
    hideAllSections();
    contentProjects.style.display = 'flex';
    contentProjects.style.flexDirection = 'wrap';
    contentTitle.innerHTML = 'Project Experience';
    projectOptions.style.display ='block';
   
    for (let i = 0; cardsContent.length; i++){
        applyAnimation(cardsContent[i]);
    }
};